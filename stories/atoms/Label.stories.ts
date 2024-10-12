import Label from "../../components/atoms/Label.vue";

export default {
	title: "Components/Atoms/Label",
	component: Label,
	tags: ["autodocs"],
	argTypes: {
		label: {
			control: "text",
			description: "The text to display in the label",
		},
	},
	args: {
		label: "Default Label",
	},
};

// Primary story
export const Primary = {
	args: {
		label: "Username",
	},
};

// With Long Label story
export const LongLabel = {
	args: {
		label: "This is a very long label that might wrap",
	},
};

// Without Label story (for testing absence)
export const WithoutLabel = {
	args: {
		label: "", // Empty label to demonstrate no display
	},
};
