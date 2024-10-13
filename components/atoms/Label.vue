<template>
	<label
		v-if="label"
		:class="classes"
		:style="style"
		class="block pointer-events-none my-2 p-2 rounded origin-left text-sm text-white/90 transition-all"
		@click="onClick"
	>
		{{ label }}
	</label>
</template>

<script lang="ts" setup>
import { computed } from "vue";

// Define props with TypeScript
const props = defineProps<{
	label: string;
	primary?: boolean;
	size?: "small" | "medium" | "large";
	backgroundColor?: string;
}>();

// Computed class object based on props
const classes = computed(() => ({
	"storybook-button": true,
	"storybook-button--primary": props.primary,
	"storybook-button--secondary": !props.primary,
	[`storybook-button--${props.size || "medium"}`]: true,
}));

// Computed style object based on props
const style = computed(() => ({
	backgroundColor: props.backgroundColor,
}));
</script>
