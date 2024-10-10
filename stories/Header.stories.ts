import type { Meta, StoryObj } from "@storybook/vue3";
import Header from "../components/organisms/Header.vue";

const meta: Meta<typeof Header> = {
	title: "Components/Organisms/Header",
	component: Header,
	tags: ["autodocs"],
	argTypes: {
		title: { control: "text" },
		// Add any other props you want to control here
	},
	args: {
		title: "Header Title", // Default prop values
	},
};

export default meta;
type Story = StoryObj<typeof Header>;

// Default Story
export const Default: Story = {
	args: {
		title: "Header Title",
	},
};
