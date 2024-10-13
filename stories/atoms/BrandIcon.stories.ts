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
		class: {
			control: "text",
			description: "Additional CSS classes for styling the icon",
		},
	},
	parameters: {
		backgrounds: {
			default: "light",
			values: [
				{ name: "light", value: "#ffffff" },
				{ name: "dark", value: "#1a1a1a" },
			],
		},
		viewport: {
			defaultViewport: "responsive", // Enable responsive mode
			viewports: {
				mobile: {
					name: "Mobile",
					styles: { width: "375px", height: "812px" },
				},
				tablet: {
					name: "Tablet",
					styles: { width: "768px", height: "1024px" },
				},
				desktop: {
					name: "Desktop",
					styles: { width: "1280px", height: "800px" },
				},
			},
		},
	},
	args: {
		icon: "https://via.placeholder.com/150", // Default placeholder icon
		class: "h-10 w-10", // Default size
	},
};

// Primary Story (Default size)
export const Primary = {
	args: {
		icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png", // GitHub logo
		class: "h-8 w-8", // Small size
	},
};

// Large Icon (For bigger screens)
export const LargeIcon = {
	args: {
		icon: "https://cdn-icons-png.flaticon.com/512/124/124010.png", // Facebook logo
		class: "h-16 w-16", // Larger size
	},
	parameters: {
		viewport: { defaultViewport: "desktop" },
	},
};

// Responsive Icon (Testing scaling behavior)
export const ResponsiveIcon = {
	args: {
		icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png", // Twitter logo
		class: "h-auto w-auto max-w-xs", // Responsive size
	},
	parameters: {
		viewport: { defaultViewport: "tablet" },
	},
};

// Broken Image (Edge Case)
export const BrokenImage = {
	args: {
		icon: "https://broken-link.com/icon.png", // Invalid URL for testing
		class: "h-10 w-10",
	},
};
