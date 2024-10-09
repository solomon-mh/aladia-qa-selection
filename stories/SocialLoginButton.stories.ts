import { Meta, Story } from "@storybook/vue3";
import SocialLoginButton from "./SocialLoginButton.vue";

export default {
	title: "Components/SocialLoginButtons",
	component: SocialLoginButton,
} as Meta;

const Template: Story = (args, { argTypes }) => ({
	components: { SocialLoginButton },
	props: Object.keys(argTypes),
	template: '<SocialLoginButtons v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	// Add default props here
};
