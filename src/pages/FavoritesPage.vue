<template>
	<nav>
		<router-link to="/">Home</router-link>
	</nav>
	<div>
		<div class="title">Избранное</div>
		<div v-if="!favoritePeoples.length">В избранном пока пусто</div>
		<people-table v-else :characters="favoritePeoples" />
	</div>
</template>
<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import PeopleTable from '@/components/PeopleTable.vue'

const store = useFavoritesStore()

const { favoritePeoples } = storeToRefs(store)
</script>

<style scoped></style>
