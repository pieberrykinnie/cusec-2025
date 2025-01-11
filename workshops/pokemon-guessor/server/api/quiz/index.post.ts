import { db } from "~/server/database/db"
import { GenericReturn } from "~/shared/types/genericReturn"
import { QuizAPIReturn } from "~/shared/types/quiz"

export default defineEventHandler(async (): Promise<GenericReturn<QuizAPIReturn>> => {
  const { data: quiz_data, error: quiz_error } = await db().create({
    "users": ["1"],
  })

  return {
    data: quiz_data,
    error: quiz_error
  }
})
