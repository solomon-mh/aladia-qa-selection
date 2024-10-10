<template>
	<div>
		<label
			v-if="label"
			class="block pointer-events-none my-2 p-2 rounded origin-left text-sm text-white/90 transition-all scale-100"
		>
			{{ label }}
		</label>

		<div
			class="group relative flex h-10 w-full rounded transition-all bg-white"
		>
			<div v-if="icon" class="flex w-10 items-center justify-center text-xl">
				<i :class="[icon, 'text-base text-black/70']"></i>
			</div>
			<input
				:class="[
					'h-full flex-1 rounded bg-transparent text-sm text-black outline-none transition-all',
					inputClasses,
				]"
				:autocomplete="autocomplete"
				:type="type"
				:placeholder="placeholder"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: "Input",
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
