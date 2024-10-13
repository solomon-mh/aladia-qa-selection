import type { Meta, StoryFn } from "@storybook/vue3";
import TermsConditions from "../../components/atoms/TermsConditions.vue";

export default {
	title: "Components/Atoms/TermsConditions",
	component: TermsConditions,
	argTypes: {
		textColor: {
			control: {
				type: "select",
				options: [
					"text-white/40",
					"text-black",
					"text-red-500",
					"text-blue-500",
					"text-green-500",
				],
			},
			description: "Text color of the Terms & Conditions component",
		},
	},
} as Meta<typeof TermsConditions>;

// Template definition using StoryFn to type the story properly
const Template: StoryFn<typeof TermsConditions> = (args) => ({
	components: { TermsConditions },
	setup() {
		return { args };
	},
	template: '<TermsConditions v-bind="args" />',
});

// Default story
export const Default = Template.bind({});
Default.args = {
	textColor: "text-white/40", // Set default text color
};

// Example of a story with a different text color
export const RedText = Template.bind({});
RedText.args = {
	textColor: "text-red-500", // Change to red text
};

// Example of a story with black text
export const BlackText = Template.bind({});
BlackText.args = {
	textColor: "text-black", // Change to black text
};

// Example of a story without specific text color
export const WithoutTextColor = Template.bind({});
WithoutTextColor.args = {
	textColor: "", // No specific color
};
