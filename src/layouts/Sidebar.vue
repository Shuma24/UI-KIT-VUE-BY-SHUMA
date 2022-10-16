<script setup lang="ts">
import { ref } from 'vue';

const links = ref([
	{
		name: 'Typography',
		link: '/typography',
	},

	{
		name: 'Button',
		link: '/button',
	},
	{
		name: 'Checkbox',
		link: '/checkbox',
	},
]);

const props = defineProps({
	sideStatus: {
		type: Boolean,
		require: true,
	},
});
</script>

<template>
	<div class="sidebar" :class="{ sidebar__open: sideStatus }">
		<router-link class="sidebar__link" v-for="link in links" :key="link.name" :to="link.link">{{
			link.name
		}}</router-link>
	</div>
</template>

<style lang="scss" scoped>
.sidebar {
	left: 0;
	top: 62px;
	height: 100%;
	background: #ffff;
	position: fixed;
	width: 250px;
	padding: 20px;
	transition: 0.2s;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
	transform: translateX(-250px);
	&__open {
		transform: translateX(0);
	}
	&__link {
		display: block;
		border-radius: 12px;
		border: 2px solid #ffff;
		transition: 0.2s;
		font-weight: bold;
		margin-bottom: 10px;
		&:hover {
			color: var(--primary);
		}
	}
}
</style>
