import type { Meta, StoryObj } from "@storybook/vue3";
import SubmitButton from "../../components/atoms/SubmitButton.vue";

const meta: Meta<typeof SubmitButton> = {
	title: "Components/Atoms/SubmitButton",
	component: SubmitButton,
	tags: ["autodocs"],
	argTypes: {
		buttonText: { control: "text" },
		bgColor: { control: "text" },
		borderColor: { control: "text" },
		gradientColor: { control: "text" },
		textColor: { control: "text" },
		size: {
			control: "select",
			options: ["small", "medium", "large"], // Add your size options
		},
		onClick: { action: "clicked" }, // Event handling for button clicks
	},
	args: {
		buttonText: "Enter",
		bgColor: "bg-black",
		borderColor: "border-white/100",
		gradientColor: "bg-black/50",
		textColor: "text-slate-100",
		size: "medium", // Default size
	},
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

// Default Story
export const Default: Story = {
	args: {
		buttonText: "Enter",
		bgColor: "bg-black",
		borderColor: "border-white/100",
		gradientColor: "bg-black/50",
		textColor: "text-slate-100",
		size: "medium", // Default size
	},
};

// Custom Story with different text and colors
export const CustomColors: Story = {
	args: {
		buttonText: "Submit",
		bgColor: "bg-blue-500",
		borderColor: "border-blue-600",
		gradientColor: "bg-blue-200/50",
		textColor: "text-white",
		size: "medium", // Default size
	},
};

// Warning Story with red color
export const Warning: Story = {
	args: {
		buttonText: "Warning",
		bgColor: "bg-red-500",
		borderColor: "border-red-600",
		gradientColor: "bg-red-200/50",
		textColor: "text-white",
		size: "medium", // Default size
	},
};
