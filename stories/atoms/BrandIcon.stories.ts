import BrandIcon from "../../components/atoms/BrandIcon.vue";

export default {
	title: "Components/Atoms/BrandIcon",
	component: BrandIcon,
	tags: ["autodocs"],
	argTypes: {
		icon: {
			control: "text",
			description:
				"The URL or path to the icon image displayed by the component",
		},
	},
	args: {
		icon: "https://via.placeholder.com/150", // Default placeholder icon
	},
};

// Primary story
export const Primary = {
	args: {
		icon: "https://via.placeholder.com/50",
	},
};

// Large Icon story
export const LargeIcon = {
	args: {
		icon: "https://via.placeholder.com/100",
	},
};

// Broken Image (Edge Case)
export const BrokenImage = {
	args: {
		icon: "https://broken-link.com/icon.png", // Invalid URL for testing
	},
};
