<template>
	<div class="search-field" v-if="characters?.length">
		<div class="search-field__item" v-for="char in characters" :key="char.name">
			<router-link :to="`peoples/${id(char.url)}`">{{ char.name }}</router-link>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, PropType, toRefs } from 'vue'
import { Character } from '@/types/index'

const props = defineProps({
	characters: { type: Object as PropType<Character[]> }
})
const { characters } = toRefs(props)

const id = (url: string) => {
	const arr = url.split('/')
	const id = arr[arr.length - 2]
	return id
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
.search-field__item:not(:last-child) {
	margin-bottom: 8px;
}
</style>
