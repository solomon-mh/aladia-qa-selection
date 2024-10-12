import InputField from "../../components/atoms/InputField.vue";

export default {
	title: "Components/Atoms/InputField",
	component: InputField,
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["text", "email", "password"], // Common input types
			description: "The type of input field",
		},
		autocomplete: {
			control: "text",
			description: "The autocomplete attribute value",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text for the input field",
		},
		maxLength: {
			control: "number",
			description: "Maximum number of characters allowed in the input field",
		},
		modelValue: {
			control: "text",
			description: "The current value of the input field",
		},
		inputClasses: {
			control: "text",
			description: "Additional classes for custom styling",
		},
	},
	args: {
		type: "text",
		autocomplete: "off",
		placeholder: "Enter text...",
		maxLength: "",
		modelValue: "",
		inputClasses: "",
	},
};

// Primary story
export const Primary = {
	args: {
		placeholder: "Enter your name",
		modelValue: "",
	},
};

// Password Field story
export const PasswordField = {
	args: {
		type: "password",
		placeholder: "Enter your password",
		modelValue: "",
	},
};

// Email Field story
export const EmailField = {
	args: {
		type: "email",
		placeholder: "Enter your email",
		modelValue: "",
	},
};

// With Max Length story
export const MaxLengthField = {
	args: {
		placeholder: "Max 10 characters",
		maxLength: 10,
		modelValue: "",
	},
};
