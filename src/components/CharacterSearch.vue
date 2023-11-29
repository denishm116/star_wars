<template>
	<div class="search__wrapper">
		<input placeholder="Search..." v-model="str" @input="search" />
		<search-field v-if="searchResult?.length || loading" :loading="loading" :characters="searchResult" />
	</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import api from '@/services/api'
import SearchField from '@/components/SearchField.vue'

const str = ref()
const searchResult = ref()
const loading = ref(false)

// Здесь я бы применил debounce
const search = async () => {
	loading.value = true
	const response = await api.search(str.value)
	loading.value = false
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
