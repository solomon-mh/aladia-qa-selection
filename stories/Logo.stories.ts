import { Meta, Story } from "@storybook/vue3";
import Logo from "./Logo.vue";

export default {
	title: "Components/Logo",
	component: Logo,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	components: { Logo },
	props: Object.keys(argTypes),
	template: '<Logo v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	// Add default props here
};
