import { Meta, Story } from "@storybook/vue3";
import Header from "./Header.vue";

export default {
	title: "Components/Header",
	component: Header,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	components: { Header },
	props: Object.keys(argTypes),
	template: '<Header v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	// Add default props here
	title: "Header Title",
};
