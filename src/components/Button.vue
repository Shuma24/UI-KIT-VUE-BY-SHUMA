<template>
	<button
		:class="[
			'btn',
			`btn_${color}`,
			{ btn_rounded: rounded },
			{ btn_outlined: outlined },
			{ btn_icon: icon },
			{ btn_large: size === 'large' },
		]"
		:disabled="disabled"
		@click="clickOnButton"
	>
		<span v-if="icon">
			<font-awesome-icon :icon="`fa-regular fa-${icon}`" />
		</span>
		<span v-else>{{ label }}</span>
	</button>
</template>

<script setup lang="ts">
const props = defineProps({
	label: {
		type: String,
		default: 'Button',
	},
	color: {
		type: String,
		default: 'primary',
	},
	rounded: {
		type: Boolean,
		required: false,
	},
	disabled: {
		type: Boolean,
		required: false,
	},
	outlined: {
		type: Boolean,
		required: false,
	},
	icon: {
		type: String,
		required: false,
	},
	size: {
		type: String,
		default: 'normal',
	},
});

const emit = defineEmits(['click']);

const clickOnButton = () => {
	emit('click');
};
</script>

<style lang="scss" scoped>
.btn {
	margin: 0 10px 10px 0;
	padding: 0 20px;
	height: 40px;
	color: #ffff;
	border-radius: 7px;
	border: none;
	cursor: pointer;
	font-size: 15px;
	transition: 0.2s;

	&_primary {
		background: var(--primary);
		border: 1px solid var(--primary);
		&:enabled:hover {
			background: var(--primary-hover);
		}
	}

	&_second {
		background: var(--second);
		border: 1px solid var(--second);
		&:enabled:hover {
			background: var(--second-hover);
		}
	}
	&_success {
		background: var(--success);
		border: 1px solid var(--success);
		&:enabled:hover {
			background: var(--success-hover);
		}
	}

	&_info {
		background: var(--info);
		border: 1px solid var(--info);
		&:enabled:hover {
			background: var(--info-hover);
		}
	}

	&_warning {
		background: var(--warning);
		border: 1px solid var(--warning);
		&:enabled:hover {
			background: var(--warning-hover);
		}
	}

	&_danger {
		background: var(--danger);
		border: 1px solid var(--danger);
		&:enabled:hover {
			background: var(--danger-hover);
		}
	}

	&_rounded {
		border-radius: 15px;
	}

	&:disabled {
		opacity: 0.6;
		cursor: default;
	}

	&_outlined {
		background: transparent;
		color: black;
		&:hover {
			color: #ffff;
		}
	}

	&_icon {
		padding: 0;
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}

	&_large {
		height: 48px;
		padding: 0 30px;
	}
}
</style>
