"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "Tahun berapa sekarang?",
    options: ["2023", "2024", "2025", "2026"],
    correctAnswer: "2024",
  },
  {
    id: 2,
    question: "Bulan apa sekarang?",
    options: ["Januari", "Februari", "Maret", "April"],
    correctAnswer: "Maret",
  },
  {
    id: 3,
    question: "Hari apa sekarang?",
    options: ["Senin", "Selasa", "Rabu", "Kamis"],
    correctAnswer: "Rabu",
  },
  {
    id: 4,
    question: "Sebutkan 3 benda berikut: Apel, Meja, Koin",
    options: ["Saya ingat semua", "Saya ingat 2", "Saya ingat 1", "Saya tidak ingat"],
    correctAnswer: "Saya ingat semua",
  },
  {
    id: 5,
    question: "Kurangi 7 dari 100, kemudian kurangi 7 lagi dari hasilnya. Berapa hasilnya?",
    options: ["93", "86", "79", "72"],
    correctAnswer: "86",
  },
]

export default function MMSETestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [testCompleted, setTestCompleted] = useState(false)

  const handleAnswer = (answer: string) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].id]: answer,
    })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setTestCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  if (testCompleted) {
    return (
      <div className="container max-w-2xl py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Tes MMSE Selesai</CardTitle>
            <CardDescription>Terima kasih telah menyelesaikan tes MMSE</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col items-center justify-center space-y-2 py-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <h3 className="text-xl font-medium">Hasil Anda: 85/100</h3>
              <p className="text-center text-muted-foreground">
                Berdasarkan hasil tes, fungsi kognitif Anda berada dalam kategori normal.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <h4 className="font-medium">Rekomendasi:</h4>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm">
                <li>Lanjutkan latihan otak secara rutin di Brain Gym</li>
                <li>Pertahankan aktivitas fisik dan pola makan sehat</li>
                <li>Lakukan tes MMSE kembali dalam 3 bulan</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <a href="/dashboard">Kembali ke Dashboard</a>
            </Button>
            <Button asChild>
              <a href="/dashboard/reports">Lihat Laporan Lengkap</a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container max-w-2xl py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Tes MMSE</CardTitle>
          <CardDescription>Jawab pertanyaan berikut dengan jujur untuk hasil yang akurat</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>
                Pertanyaan {currentQuestion + 1} dari {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="py-4">
            <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>

            <RadioGroup
              className="mt-4 space-y-3"
              value={answers[questions[currentQuestion].id]}
              onValueChange={handleAnswer}
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="text-base">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Sebelumnya
          </Button>
          <Button onClick={handleNext} disabled={!answers[questions[currentQuestion].id]}>
            {currentQuestion < questions.length - 1 ? (
              <>
                Selanjutnya
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            ) : (
              "Selesai"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

