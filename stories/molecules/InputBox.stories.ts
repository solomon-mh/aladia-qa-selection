import InputBox from "../../components/molecules/InputBox.vue";

export default {
	title: "Components/Molecules/InputBox",
	component: InputBox,
	tags: ["autodocs"],
	argTypes: {
		icon: {
			control: "text",
			description:
				"The URL or path to the icon image displayed inside the input box.",
		},
		label: {
			control: "text",
			description: "Label text for the input field.",
		},
		type: {
			control: { type: "select", options: ["text", "email", "password"] },
			description: "Type of the input field.",
		},
		autocomplete: {
			control: "text",
			description: "Autocomplete attribute for the input field.",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text for the input field.",
		},
		modelValue: {
			control: "text",
			description: "Current value of the input field.",
		},
		inputClasses: {
			control: "text",
			description: "Additional CSS classes for styling the input field.",
		},
	},
	args: {
		icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png", // Example icon (GitHub)
		label: "Username",
		type: "text",
		autocomplete: "off",
		placeholder: "Enter your username...",
		modelValue: "",
		inputClasses: "border rounded-md p-2",
	},
};

// Default story for InputBox
export const Default = {
	args: {},
};

// InputBox with a different icon
export const WithDifferentIcon = {
	args: {
		icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png", // Facebook icon
	},
};

// InputBox with custom placeholder and label
export const WithCustomLabelAndPlaceholder = {
	args: {
		label: "Email",
		placeholder: "Enter your email address...",
		type: "email",
	},
};

// InputBox for password input
export const PasswordInput = {
	args: {
		label: "Password",
		type: "password",
		placeholder: "Enter your password...",
	},
};

// InputBox with different autocomplete options
export const WithAutocomplete = {
	args: {
		label: "Search",
		autocomplete: "on",
		placeholder: "Search...",
	},
};
