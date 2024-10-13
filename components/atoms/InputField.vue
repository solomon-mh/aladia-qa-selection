<!-- InputField.vue -->
<template>
	<input
		:class="[
			'flex-1 rounded bg-transparent text-sm text-black outline-none transition-all',
			inputClasses,
		]"
		:autocomplete="autocomplete"
		:type="type"
		:disabled="disabled"
		:placeholder="placeholder"
		:value="modelValue"
		:maxlength="maxLength"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
export default {
	name: "InputField",
	props: {
		type: {
			type: String,
			default: "text",
		},
		autocomplete: {
			type: String,
			default: "off",
		},
		placeholder: {
			type: String,
			default: "",
		},
		maxLength: {
			type: String,
			default: "",
		},
		modelValue: {
			type: String,
			default: "",
		},
		inputClasses: {
			type: String,
			default: "",
		},
	},
	emits: ["update:modelValue"],
};
</script>
