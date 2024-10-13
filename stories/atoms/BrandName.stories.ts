import BrandName from "../../components/atoms/BrandName.vue";

// Storybook metadata for BrandName
export default {
	title: "Components/Atoms/BrandName",
	component: BrandName,
	tags: ["autodocs"],
	argTypes: {
		text: {
			control: "text",
			description: "The text content displayed by the BrandName component",
		},
		color: {
			control: {
				type: "select",
				options: [
					"text-white",
					"text-black",
					"text-red-500",
					"text-green-500",
					"text-blue-500",
				],
			},
			description: "Text color of the BrandName component",
		},
	},
	args: {
		text: "Default Brand Name",
		color: "text-black", // Default color
	},
};

// Primary story
export const Primary = {
	args: {
		text: "BrandName - Primary",
		color: "text-black",
	},
};

// Long Text story
export const LongText = {
	args: {
		text: "This is a long brand name that demonstrates text wrapping behavior",
		color: "text-green-500",
	},
};

// Empty Text (Edge Case)
export const EmptyText = {
	args: {
		text: "",
		color: "text-red-500",
	},
};
