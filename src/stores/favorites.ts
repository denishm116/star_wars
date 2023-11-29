import { defineStore, skipHydrate } from 'pinia'

import { computed, ref } from 'vue'
import { Character } from '@/types/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
export const useFavoritesStore = defineStore(
	'favorites',
	() => {
		const favoritePeoples = ref<Character[]>([])

		function toggle(character: Character) {
			if (!isInFavorites(character)) {
				favoritePeoples.value.push(character)
			} else {
				remove(character)
			}
		}

		function remove(character: Character) {
			favoritePeoples.value = favoritePeoples.value.filter((char) => char.name !== character.name)
		}

		function isInFavorites(character: Character) {
			if (favoritePeoples.value.find((char) => char?.name === character?.name)) {
				return true
			}
			return
		}

		return { favoritePeoples, toggle, remove, isInFavorites }
	},
	{ persist: true }
)
