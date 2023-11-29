<template>
	<nav>
		<router-link to="/">Home</router-link>
	</nav>
	<div>
		<div class="title">Избранное</div>
		<div v-if="loading">Loading</div>
		<people-table v-else :peoples="favoritePeoples" />
	</div>
</template>
<script setup lang="ts">
import { useFavoritesStore } from '@/stores/favorites'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import PeopleTable from '@/components/PeopleTable.vue'

const store = useFavoritesStore()

const loading = ref(false)

const { favoritePeoples } = storeToRefs(store)
</script>

<style scoped></style>
