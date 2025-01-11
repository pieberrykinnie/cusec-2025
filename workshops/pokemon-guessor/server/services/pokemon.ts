import { EventHandlerRequest, H3Event } from "h3"
import { PokemonClient } from "pokenode-ts";
import { GenericReturn } from "~/shared/types/genericReturn";
import { PokemonAPICreateQuestionReturn } from "~/shared/types/pokemon";
import { randomNumber } from "~/shared/utils/number";

let pokemons: string[] = []
let pokemons_informations: {
  [key: string]: PokemonAPICreateQuestionReturn
} = {}

const POKEMON_LIMITS = 151

export const usePokemonAPI = ((event: H3Event<EventHandlerRequest>) => {
  const api = new PokemonClient();

  const createAnswers = (pokemon_name_to_exclude: string) => {
    let possible_answers: string[] = [];

    while (possible_answers.length < 3) {
      let random_answer = pokemons[randomNumber(0, POKEMON_LIMITS - 1)];
      if (
        random_answer !== pokemon_name_to_exclude &&
        !possible_answers.includes(random_answer)
      ) {
        possible_answers.push(random_answer)
      }
    }

    const current_pokemon_postion_in_response = randomNumber(0, 4)
    possible_answers.splice(current_pokemon_postion_in_response, 0, pokemon_name_to_exclude)
    return possible_answers
  }

  const createOneQuestion = async (): Promise<GenericReturn<PokemonAPICreateQuestionReturn>> => {
    if (!pokemons.length) {
      try {
        const data = await api.listPokemons(1, POKEMON_LIMITS)
        pokemons = data.results.map(p => p.name)
      } catch (e) {
        return {
          error: new Error("issue retrieving pokemon list"),
          data: null
        }
      }
    }

    try {
      const random_pokemon_name = pokemons[randomNumber(0, 150)]

      if (typeof pokemons_informations[random_pokemon_name] !== "undefined") {
        console.log(pokemons_informations[random_pokemon_name])
        return {
          data: pokemons_informations[random_pokemon_name],
          error: null
        }
      }
      const pokemon_species_data = await api.getPokemonSpeciesByName(random_pokemon_name)
      const pokemon_data = await api.getPokemonByName(random_pokemon_name)
      let question = pokemon_species_data.flavor_text_entries.filter(e => e.language.name === "en")[0].flavor_text
      question = question.replaceAll(random_pokemon_name, '...')

      pokemons_informations[random_pokemon_name] = {
        question,
        possible_answers: createAnswers(random_pokemon_name),
        answer_data: {
          name: pokemon_data.name,
          image: pokemon_data.sprites.other?.home.front_default ?? "",
        }
      }

      return {
        data: pokemons_informations[random_pokemon_name],
        error: null
      }

    } catch (e) {
      return {
        error: new Error("error generating questions"),
        data: null
      }
    }
  }

  return {
    createOneQuestion
  }
})
