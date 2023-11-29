import { createWebHistory, createRouter } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import PeoplesPage from '@/pages/PeoplesPage.vue'
import PeoplePage from '@/pages/PeoplePage.vue'
import FavoritesPage from '@/pages/FavoritesPage.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomePage
	},
	{
		path: '/peoples',
		name: 'Peoples',
		component: PeoplesPage
	},
	{
		path: '/peoples/:id',
		name: 'People',
		component: PeoplePage
	},
	{
		path: '/favorites',
		name: '/Favorites',
		component: FavoritesPage
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
