export interface Quiz {
  id: string,
  users: string[],
  created_at: Date
}

export type QuizAPICreateParams = Omit<Quiz, "id" | "created_at">
export type QuizAPIReturn = Quiz
