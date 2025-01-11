<template>
  <header class="bg-slate-800 py-10 flex justify-between items-center text-white px-4 text-4xl ">
    <div class="tracking-wide font-bold text-center ">
        Pokemon Guessor
    </div>
</header>
<div class="mx-auto max-w-2xl py-32">
    <div class="text-center">
        <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-900">Pokemon Guessor!</h1>
        <p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">Show me Your knowledge about Pokemons.</p>
        <button type="button" @click="createQuiz" class="mt-4 bg-white text-2xl leading-relaxed border-2 rounded-lg border-slate-400 px-6 py-4 hover:bg-slate-300 hover:text-black first-letter:capitalize">Play a Game</button>
        <div v-if="error_api" class="mt-10">
            {{ error_api }}
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
const error_api = ref<string | null>(null)

const createQuiz = async () => {
  try {
    const { data: quiz, error } = await $fetch('/api/quiz', {
      "method": "POST"
    })
    if (!quiz || error) return error_api.value = error?.message ?? "error when creating the quiz"
    
    const router = useRouter()
    router.push(`/quiz/${quiz.id}`)

  } catch(e) {
    error_api.value = e as string
  }
}
</script>
