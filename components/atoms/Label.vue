<template>
	<label
		v-if="label"
		:class="classes"
		:style="style"
		class="block pointer-events-none my-2 p-2 rounded origin-left text-sm transition-all"
		@click="onClick"
	>
		<span :class="textColor">{{ label }}</span>
		<!-- Wrap label in span for color -->
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
	textColor?: string; // New prop for text color
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

// Computed class for text color
const textColor = computed(() => {
	return props.textColor || "text-white"; // Default to white if no color is provided
});

// Method to handle click event
const onClick = () => {
	// Handle click event if needed
};
</script>
