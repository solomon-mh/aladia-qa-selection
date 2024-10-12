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
	},
	args: {
		text: "Default Brand Name",
	},
};

// Primary story
export const Primary = {
	args: {
		text: "BrandName - Primary",
	},
};

// Long Text story
export const LongText = {
	args: {
		text: "This is a long brand name that demonstrates text wrapping behavior",
	},
};

// Empty Text (Edge Case)
export const EmptyText = {
	args: {
		text: "",
	},
};
