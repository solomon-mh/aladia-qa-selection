<!-- Input.vue -->
<template>
	<div>
		<Label v-if="label" :label="label" />
		<div
			class="group relative flex h-10 w-full rounded transition-all bg-white focus-within:bg-white/80"
		>
			<Icon v-if="icon" :icon="icon" />
			<InputField
				:autocomplete="autocomplete"
				:type="type"
				:placeholder="placeholder"
				:model-value="modelValue"
				:input-classes="inputClasses"
				@update:modelValue="$emit('update:modelValue', $event)"
			/>
		</div>
	</div>
</template>

<script>
import Icon from "../atoms/Icon.vue";
import InputField from "../atoms/InputField.vue";
import Label from "../atoms/Label.vue";

export default {
	name: "InputBox",
	components: {
		Label,
		Icon,
		InputField,
	},
	props: {
		icon: {
			type: String,
			default: "",
		},
		label: {
			type: String,
			default: "",
		},
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
