import { GenericReturn } from "~/shared/types/genericReturn"
import { Quiz, QuizAPICreateParams } from "~/shared/types/quiz"

const quiz: Quiz[] = []

export const db = () => {
  const create = async (data: QuizAPICreateParams): Promise<GenericReturn<QuizAPIReturn>> => {
    const q: Quiz = {
      id: new Date().getTime().toString(),
      created_at: new Date(),
      ...data
    }

    quiz.push(q)

    return {
      data: q,
      error: null
    }
  }

  const get = async (quiz_id: string): Promise<GenericReturn<Quiz>> => {
    const q = quiz.find((q) => q.id === quiz_id)
    return {
      data: q ?? null,
      error: !q ? new Error("quiz not found") : null
    }
  }

  return {
    create,
    get
  }
}
