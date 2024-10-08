<template>
	<button :class="['button', variant, size]" @click="onClick">
		{{ label }}
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		label: {
			type: String,
			required: true,
		},
		variant: {
			type: String,
			default: "primary", // primary, secondary, danger, etc.
		},
		size: {
			type: String,
			default: "medium", // small, medium, large
		},
	},
	methods: {
		onClick() {
			this.$emit("click");
		},
	},
};
</script>

<style scoped>
.button {
	font-family: Arial, sans-serif;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	transition: background-color 0.2s ease-in-out;
}

.button.primary {
	background-color: #007bff;
	color: white;
}

.button.secondary {
	background-color: #6c757d;
	color: white;
}

.button.danger {
	background-color: #dc3545;
	color: white;
}

.button.small {
	font-size: 0.75rem;
}

.button.medium {
	font-size: 1rem;
}

.button.large {
	font-size: 1.25rem;
}
</style>
