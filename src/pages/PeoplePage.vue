<template>
	<nav>
		<router-link to="/">Home</router-link>
	</nav>
	<div class="title">Character {{ character?.name }}</div>
	<favorite-button v-if="isInFavorites(character)" :character="character" />
	<div v-if="loading" class="hello">Loading</div>
	<div v-else class="hello">
		<table>
			<tr v-for="(char, index) in character" :key="index">
				<td>
					<div v-if="char.constructor !== Array">{{ char }}</div>
					<div v-else>
						<a :href="c" v-for="(c, cindex) in char" :key="cindex">{{ c }}{{ cindex < char.length - 1 ? ', ' : '' }}</a>
					</div>
				</td>
			</tr>
		</table>
	</div>
</template>

<script setup lang="ts">
import api from '@/services/api'
import { useFavoritesStore } from '@/stores/favorites'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import FavoriteButton from '@/components/FavoriteButton.vue'

const store = useFavoritesStore()

const { isInFavorites } = store
const route = useRoute()

const loading = ref(false)

const id = route.params.id as string

const character = ref()

const getPeoples = async () => {
	loading.value = true
	const { data } = await api.getCharacter(id)
	loading.value = false
	character.value = data
}
getPeoples()
</script>

<style scoped>
td {
	padding: 8px;
}
tr:nth-child(2n) {
	background: #f0f0f0; /* Цвет фона */
}
</style>
