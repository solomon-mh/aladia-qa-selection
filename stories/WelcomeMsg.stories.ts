import { Meta, Story } from "@storybook/vue3";
import WelcomeMsg from "./WelcomeMsg.vue";

export default {
	title: "Components/WelcomeMsg",
	component: WelcomeMsg,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	components: { WelcomeMsg },
	props: Object.keys(argTypes),
	template: '<WelcomeMsg v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	message: "Welcome to Nuxt Storybook!",
};
