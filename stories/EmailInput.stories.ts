// EmailInput.stories.ts

// EmailInput.stories.ts
import type { Meta, StoryFn } from "@storybook/vue3";
import EmailInput from "../components/EmailInput.vue";

export default {
	title: "Components/EmailInput",
	component: EmailInput,
} as Meta<typeof EmailInput>;

const Template: StoryFn<typeof EmailInput> = (args) => ({
	components: { EmailInput },
	setup() {
		return { args };
	},
	template: '<EmailInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {};
