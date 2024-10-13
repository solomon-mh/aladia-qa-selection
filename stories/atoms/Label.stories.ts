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
		backgroundColor: {
			control: "color", // Allows you to select a color for the background
			description: "Background color of the label",
		},
		textColor: {
			control: {
				type: "select",
				options: [
					"text-black",
					"text-white",
					"text-red-500",
					"text-blue-500",
					"text-green-500",
				],
			},
			description: "Text color of the label",
		},
	},
	args: {
		label: "Default Label",
		backgroundColor: "#000000", // Default background color
		textColor: "text-white", // Default text color
	},
};

// Primary story
export const Primary = {
	args: {
		label: "Username",
		backgroundColor: "#333333",
		textColor: "text-white",
	},
};

// With Long Label story
export const LongLabel = {
	args: {
		label: "This is a very long label that might wrap",
		backgroundColor: "#444444",
		textColor: "text-white",
	},
};

// Without Label story (for testing absence)
export const WithoutLabel = {
	args: {
		label: "", // Empty label to demonstrate no display
		backgroundColor: "#555555",
		textColor: "text-white",
	},
};
