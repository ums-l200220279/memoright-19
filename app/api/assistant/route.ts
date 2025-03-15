import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"
import { encryptData, logAudit, sanitizeData } from "@/utils/compliance"

export async function POST(req: NextRequest) {
  const { message, userType, userId } = await req.json()

  try {
    logAudit("AI_ASSISTANT_REQUEST", userId, sanitizeData({ message, userType }))

    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `You are an AI assistant for the Memoright cognitive health app. The user is a ${userType}. Respond to their message: ${message}`,
      system:
        "You are a helpful assistant for Memoright, an AI-powered cognitive health app. Provide accurate and supportive information.",
    })

    const encryptedResponse = encryptData(text)

    logAudit("AI_ASSISTANT_RESPONSE", userId, sanitizeData({ responseLength: text.length }))

    return NextResponse.json({ response: encryptedResponse })
  } catch (error) {
    console.error("Error in AI assistant:", error)
    logAudit("AI_ASSISTANT_ERROR", userId, sanitizeData({ error: error.message }))
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 })
  }
}

