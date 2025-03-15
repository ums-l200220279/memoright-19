import { type NextRequest, NextResponse } from "next/server"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: NextRequest) {
  const { answers } = await req.json()

  try {
    const { text } = await generateText({
      model: openai("gpt-4o"),
      prompt: `Analyze the following MMSE test answers and provide a detailed assessment: ${JSON.stringify(answers)}`,
      system:
        "You are an AI system specialized in analyzing MMSE (Mini-Mental State Examination) test results. Provide a detailed assessment based on the given answers.",
    })

    // Parse the AI-generated assessment
    const assessment = JSON.parse(text)

    return NextResponse.json(assessment)
  } catch (error) {
    console.error("Error in cognitive assessment:", error)
    return NextResponse.json({ error: "An error occurred while processing the assessment." }, { status: 500 })
  }
}

