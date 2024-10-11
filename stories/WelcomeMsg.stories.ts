import type { Meta, StoryObj } from "@storybook/vue3";
import WelcomeMsg from "../components/molecules/WelcomeMsg.vue";

const meta: Meta<typeof WelcomeMsg> = {
	title: "Components/WelcomeMsg",
	component: WelcomeMsg,
	tags: ["autodocs"],
	argTypes: {
		message: { control: "text" }, // Add any other props you want to control here
	},
	args: {
		message: "Welcome to Nuxt Storybook!", // Default prop values
	},
};

export default meta;
type Story = StoryObj<typeof WelcomeMsg>;

// Default Story
export const Default: Story = {
	args: {
		message: "Welcome to Nuxt Storybook!",
	},
};
