import { db } from "~/server/database/db"
import { usePokemonAPI } from "~/server/services/pokemon"
import { GenericReturn } from "~/shared/types/genericReturn"
import { PokemonAPICreateQuestionReturn } from "~/shared/types/pokemon"

export default defineEventHandler(async (event): Promise<GenericReturn<PokemonAPICreateQuestionReturn>> => {
  const pokemon_api = usePokemonAPI(event)
  const quiz_id = getRouterParam(event, "quiz_id")
  const { data: quiz, error: quiz_error } = await db().get(quiz_id || "")

  if (!quiz || quiz_error) {
    return {
      data: null,
      error: quiz_error
    }
  }

  const {
    data: question,
    error: question_error
  } = await pokemon_api.createOneQuestion()

  return {
    data: question ?? null,
    error: question_error ?? null
  }
})
