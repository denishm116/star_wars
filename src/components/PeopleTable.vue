<template>
	<table>
		<tr>
			<th>Name</th>
			<th>Height</th>
			<th>Mass</th>
			<th>Hair color</th>
			<th>Favorites</th>
		</tr>
		<tr v-for="character in characters" :key="character.id">
			<td>{{ character.name }}</td>
			<td>{{ character.height }}</td>
			<td>{{ character.mass }}</td>
			<td>{{ character.hair_color }}</td>
			<td>
				<favorite-button :character="character" />
			</td>
		</tr>
	</table>
</template>

<script setup lang="ts">
import { defineProps, toRefs, PropType } from 'vue'
import { Character } from '@/types/index'
import FavoriteButton from '@/components/FavoriteButton.vue'

const props = defineProps({
	characters: { type: Object as PropType<Character[]> }
})
const { characters } = toRefs(props)
</script>

<style scoped>
th {
	background: #bbbbbb;
}
th,
td {
	padding: 4px 8px;
}
tr:nth-child(2n) {
	background: #f0f0f0;
}
</style>
