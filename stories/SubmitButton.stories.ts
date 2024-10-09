import { Meta, Story } from "@storybook/vue3";
import SubmitButton from "./SubmitButton.vue";

export default {
	title: "Components/SubmitButton",
	component: SubmitButton,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	components: { SubmitButton },
	props: Object.keys(argTypes),
	template: '<SubmitButton v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	label: "Submit",
	disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	label: "Submit",
	disabled: true,
};
