<template>
	<div class="search__wrapper">
		<input placeholder="Search..." v-model="str" @input="search" />
		<search-field :characters="searchResult" />
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import api from '@/services/api'
import SearchField from '@/components/SearchField.vue'

const str = ref()
const searchResult = ref()

// Здесь я бы применил debounce
const search = async () => {
	const response = await api.search(str.value)
	searchResult.value = response.data.results
}

watch(str, () => {
	searchResult.value = null
})
</script>

<style scoped>
.search__wrapper {
	position: relative;
	margin-bottom: 24px;
}
</style>
