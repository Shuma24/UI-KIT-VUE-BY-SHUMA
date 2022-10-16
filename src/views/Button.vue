<template>
	<h1 class="heading-1">Button</h1>
	<h2 class="heading-2">Colors</h2>
	<div class="line">
		<Button label="Primary" color="primary"></Button>
		<Button label="Secondary" color="second"></Button>
		<Button label="Success" color="success"></Button>
		<Button label="Info" color="info"></Button>
		<Button label="Warning" color="warning"></Button>
		<Button label="Danger" color="danger"></Button>
	</div>
	<h2 class="heading-2">Rounded</h2>
	<div class="line">
		<Button label="Primary" color="primary" rounded></Button>
		<Button label="Secondary" color="second" rounded></Button>
		<Button label="Success" color="success" rounded></Button>
		<Button label="Info" color="info" rounded></Button>
		<Button label="Warning" color="warning" rounded></Button>
		<Button label="Danger" color="danger" rounded></Button>
	</div>
	<h2 class="heading-2">Disabled</h2>
	<div class="line">
		<Button label="Primary" color="primary" disabled></Button>
		<Button label="Secondary" color="second" disabled></Button>
		<Button label="Success" color="success" disabled></Button>
		<Button label="Info" color="info" disabled></Button>
		<Button label="Warning" color="warning" disabled></Button>
		<Button label="Danger" color="danger" disabled></Button>
	</div>
	<h2 class="heading-2">Outlined</h2>
	<div class="line">
		<Button label="Primary" color="primary" outlined></Button>
		<Button label="Secondary" color="second" outlined></Button>
		<Button label="Success" color="success" outlined></Button>
		<Button label="Info" color="info" outlined></Button>
		<Button label="Warning" color="warning" outlined></Button>
		<Button label="Danger" color="danger" outlined></Button>
	</div>
	<h2 class="heading-2">Icon</h2>
	<div class="line">
		<Button color="primary" icon="heart" outlined></Button>
		<Button color="second" icon="hand"></Button>
		<Button color="success" icon="address-book" outlined></Button>
		<Button color="info" icon="credit-card"></Button>
		<Button color="warning" icon="lemon" outlined></Button>
		<Button color="danger" icon="hourglass"></Button>
	</div>
	<h2 class="heading-2">Size</h2>
	<div class="line">
		<Button label="Normal" color="primary"></Button>
		<Button label="Large" color="primary" size="large"></Button>
	</div>
	<h2 class="heading-2">Event</h2>
	<div class="line">
		<Button label="Normal" color="danger" @click="eventForButton"></Button>
	</div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue';

const eventForButton = () => {
	alert('You click danger button');
};
</script>
