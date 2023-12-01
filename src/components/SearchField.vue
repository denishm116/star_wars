<template>
	<div class="search-field" v-if="!loading">
		<div class="search-field__item" v-for="char in characters" :key="char.name">
			<router-link :to="`peoples/${id(char.url)}`">{{ char.name }}</router-link>
		</div>
	</div>
	<div class="search-field" v-else>
		<div class="search-field__item">Loading...</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'
import { Character } from '@/types/index'

defineProps({
	characters: { type: Object as PropType<Character[]> },
	loading: { type: Boolean }
})

const id = (url: string) => {
	const arr = url.split('/')
	return arr[arr.length - 2]
}
</script>

<style scoped>
.search-field {
	box-shadow: 2px 3px 5px rgba(107, 114, 128, 0.5);
	background: #ffffff;
	border-radius: 8px;
	position: absolute;
	padding: 8px;
}
.search-field__item {
	padding: 4px;
}
.search-field__item:not(:last-child) {
	margin-bottom: 8px;
}
</style>
