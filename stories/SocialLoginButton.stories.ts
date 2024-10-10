import type { Meta, StoryFn } from "@storybook/vue3";
import SocialLoginButton from "../components/atoms/SocialLoginButton.vue";

export default {
	title: "Components/SocialLoginButtons",
	component: SocialLoginButton,
} as Meta;

const meta = {
	title: "Components/Atoms/Button",
	component: SocialLoginButton,
	tags: ["autodocs"],
} satisfies Meta<typeof SocialLoginButton>;

const Template: StoryFn = (args, { argTypes }) => ({
	components: { SocialLoginButton },
	props: Object.keys(argTypes),
	template: '<SocialLoginButtons v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	// Add default props here
};
