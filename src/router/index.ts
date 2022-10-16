import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import Typography from '@/views/Typography.vue';
import Button from '@/views/Button.vue';
import CheckboxVue from '@/views/Checkbox.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/typography',
			name: 'typography',
			component: Typography,
		},
	 {
			path: '/button',
			name: 'button',
			component: Button,
		},
		{
			path: '/checkbox',
			name: 'Checkbox',
			component: CheckboxVue,
		},
	],
});

export default router;
