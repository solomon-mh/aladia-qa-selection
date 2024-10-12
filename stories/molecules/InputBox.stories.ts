import { fn } from "@storybook/test";
import InputBox from "../../components/molecules/InputBox.vue";

export default {
	title: "Components/molecules/InputBox",
	component: InputBox,
	tags: ["autodocs"],
	argTypes: {
		icon: {
			control: "text",
			description: "Icon path or URL to display inside the input field",
		},
		label: {
			control: "text",
			description: "Text for the input field label",
		},
		type: {
			control: { type: "select" },
			options: ["text", "password", "email", "number"],
			description: "The type of input field",
		},
		autocomplete: {
			control: { type: "select" },
			options: ["on", "off"],
			description: "Autocomplete behavior of the input",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text for the input field",
		},
		modelValue: {
			control: "text",
			description: "The bound value for the input field",
		},
		inputClasses: {
			control: "text",
			description: "Additional CSS classes for styling the input field",
		},
	},
	args: {
		icon: "",
		label: "Username",
		type: "text",
		autocomplete: "off",
		placeholder: "Enter your username",
		modelValue: "",
		inputClasses: "",
	},
};

// Primary story
export const Primary = {
	args: {
		label: "Username",
		placeholder: "Enter your username",
	},
};

// With Icon story
export const WithIcon = {
	args: {
		label: "Search",
		icon: "https://via.placeholder.com/20",
		placeholder: "Search here...",
	},
};

// Password Input story
export const Password = {
	args: {
		label: "Password",
		type: "password",
		placeholder: "Enter your password",
	},
};

// Email Input story
export const Email = {
	args: {
		label: "Email",
		type: "email",
		placeholder: "Enter your email address",
	},
};
