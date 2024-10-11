import InputBox from "../components/molecules/InputBox.vue";

export default {
	title: "Components/Molecules/InputBox",
	component: InputBox,
	argTypes: {
		icon: {
			control: "text",
			description: "Icon class for the input field (e.g., Font Awesome icons).",
			defaultValue: "",
		},
		label: {
			control: "text",
			description: "Label for the input field.",
			defaultValue: "Email Address",
		},
		type: {
			control: {
				type: "select",
				options: ["text", "password", "email", "number"],
			},
			description: "Type of input field.",
			defaultValue: "text",
		},
		autocomplete: {
			control: "text",
			description: "Autocomplete attribute for the input.",
			defaultValue: "off",
		},
		placeholder: {
			control: "text",
			description: "Placeholder text for the input field.",
			defaultValue: "Enter text here...",
		},
		modelValue: {
			control: "text",
			description: "Two-way binding for the input value.",
			defaultValue: "",
		},
		inputClasses: {
			control: "text",
			description: "Additional classes for custom styling.",
			defaultValue: "",
		},
	},
	parameters: {
		docs: {
			description: {
				component:
					"Reusable input component with optional icon, label, and customizable props like type, placeholder, etc.",
			},
		},
	},
};

const Template = (args, { argTypes }) => ({
	props: Object.keys(argTypes),
	components: { Input },
	template: '<Input v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
	icon: "fa-solid fa-envelope",
	label: "Email Address",
	type: "text",
	autocomplete: "off",
	placeholder: "Enter your email",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
	icon: "fa-solid fa-lock",
	label: "Password",
	type: "password",
	placeholder: "Enter your password",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
	label: "Username",
	type: "text",
	placeholder: "Enter your username",
	icon: "",
};

export const NoLabel = Template.bind({});
NoLabel.args = {
	icon: "fa-solid fa-user",
	type: "text",
	placeholder: "Username",
	label: "",
};

export const CustomInputClasses = Template.bind({});
CustomInputClasses.args = {
	icon: "fa-solid fa-user",
	label: "Custom Input",
	type: "text",
	inputClasses: "border border-red-500",
};
