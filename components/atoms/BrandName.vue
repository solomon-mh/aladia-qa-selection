<template>
	<div :class="textColor" class="w-40 whitespace-nowrap">{{ text }}</div>
</template>

<script>
export default {
	name: "BrandName",
	props: {
		text: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			default: "text-white", // Default to white
		},
	},
	computed: {
		textColor() {
			return this.color; // Use the color prop to set the class
		},
	},
};
</script>
