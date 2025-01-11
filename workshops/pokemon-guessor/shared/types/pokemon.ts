export interface PokemonAPICreateQuestionReturn {
  question: string,
  possible_answers: string[],
  answer_data: {
    name: string,
    image: string
  }
}
