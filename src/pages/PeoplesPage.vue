<template>
	<nav>
		<router-link to="/">Home</router-link>
	</nav>
	<div>
		<div class="title">Персонажи</div>
		<character-search></character-search>
		<div v-if="loading">Loading</div>
		<people-table v-else :characters="characters" />
	</div>
</template>

<script setup lang="ts">
import api from '@/services/api'
import PeopleTable from '@/components/PeopleTable.vue'
import CharacterSearch from '@/components/CharacterSearch.vue'
import { ref } from 'vue'

const characters = ref()
const loading = ref(false)

const getPeoples = async () => {
	loading.value = true
	const { data } = await api.getPeoples()
	loading.value = false
	characters.value = data?.results
}
getPeoples()
</script>

<style scoped></style>
