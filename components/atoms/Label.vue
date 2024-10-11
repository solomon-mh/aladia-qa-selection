<!-- Label.vue -->
<template>
	<label
		v-if="label"
		class="block pointer-events-none my-2 p-2 rounded origin-left text-sm text-white/90 transition-all scale-100"
	>
		{{ label }}
	</label>
</template>

<script>
export default {
	name: "Label",
	props: {
		label: {
			type: String,
			required: true, // Set to true if the label is mandatory
		},
	},
};
</script>
