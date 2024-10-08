import { Meta, StoryFn } from "@storybook/vue3";
import Button from "../components/Button.vue";

// Define the metadata for the Button component story
export default {
	title: "Components/Button",
	component: Button,
	argTypes: {
		variant: {
			control: { type: "select", options: ["primary", "secondary", "danger"] },
		},
		size: {
			control: { type: "select", options: ["small", "medium", "large"] },
		},
		onClick: { action: "clicked" },
	},
} as Meta<typeof Button>;

// Define a template for stories
const Template: StoryFn<typeof Button> = (args) => ({
	components: { Button },
	setup() {
		return { args };
	},
	template: '<Button v-bind="args" />',
});

// Define the Primary story
export const Primary = Template.bind({});
Primary.args = {
	label: "Primary Button",
	variant: "primary",
	size: "medium",
};

// Define the Secondary story
export const Secondary = Template.bind({});
Secondary.args = {
	label: "Secondary Button",
	variant: "secondary",
	size: "medium",
};

// Define the Danger story
export const Danger = Template.bind({});
Danger.args = {
	label: "Danger Button",
	variant: "danger",
	size: "medium",
};

// Define the Large button story
export const Large = Template.bind({});
Large.args = {
	label: "Large Button",
	variant: "primary",
	size: "large",
};

// Define the Small button story
export const Small = Template.bind({});
Small.args = {
	label: "Small Button",
	variant: "primary",
	size: "small",
};
