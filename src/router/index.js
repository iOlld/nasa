import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	// {
	// 	path: '',
	// 	name: '',
	// 	component: '',
	// }
]

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	// history: createWebHistory(),
	routes,
})



export default router