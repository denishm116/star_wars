<template>
	<button v-if="character" @click="toggleFavorites(character)">
		{{ !isInFavorites(character) ? 'В избранное' : 'Удалить из избранного' }}
	</button>
</template>

<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { Character } from '@/types/index'
import { defineProps, PropType, toRefs } from 'vue'

const props = defineProps({
	character: { type: Object as PropType<Character> }
})
const { character } = toRefs(props)

const store = useFavoritesStore()
const { toggle, isInFavorites } = store

const toggleFavorites = (character: Character) => {
	toggle(character)
}
</script>

<style scoped></style>
