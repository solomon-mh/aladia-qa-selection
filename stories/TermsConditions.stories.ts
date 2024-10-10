// TermsConditions.stories.ts

// TermsConditions.stories.ts
import type { Meta, StoryFn } from "@storybook/vue3";
import TermsConditions from "../components/atoms/TermsConditions.vue";

export default {
	title: "Components/TermsConditions",
	component: TermsConditions,
} as Meta<typeof TermsConditions>;

// Template definition using StoryFn to type the story properly
const Template: StoryFn<typeof TermsConditions> = (args) => ({
	components: { TermsConditions },
	setup() {
		return { args };
	},
	template: '<TermsConditions v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
