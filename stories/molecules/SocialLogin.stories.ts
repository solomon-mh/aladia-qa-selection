import SocialLogin from "../../components/molecules/SocialLogin.vue";

export default {
	title: "Components/Molecules/SocialLogin",
	component: SocialLogin,
	tags: ["autodocs"],
	argTypes: {
		icon: {
			control: "text",
			description: "The URL or path to the brand icon image",
		},
		text: {
			control: "text",
			description: "Text to display on the button",
		},
		link: {
			control: "text",
			description: "The link to navigate when the button is clicked",
			defaultValue: "#",
		},
		backgroundColor: {
			// Add backgroundColor prop
			control: "color", // Color control for text
			description: "Text color for the button",
		},
	},
	args: {
		icon: "https://via.placeholder.com/20", // Placeholder icon
		text: "Social Login",
		link: "#", // Default link
		backgroundColor: "#121212", // Default text color for #232323 background
	},
	parameters: {
		backgrounds: { default: "#232323" }, // Set #232323 background for all stories
	},
};

// Primary story
export const Primary = {
	args: {
		icon: "https://via.placeholder.com/20",
		text: "Login with Social Media",
		link: "https://example.com/login", // Example link
		backgroundColor: "#121212", // Ensure text is visible
	},
};

// With Different Icon story
export const WithDifferentIcon = {
	args: {
		icon: "https://via.placeholder.com/20?text=FB", // Facebook icon placeholder
		text: "Login with Facebook",
		link: "https://facebook.com/login",
		backgroundColor: "lightGray", // Ensure text is visible
	},
};

// Without a Link story
export const WithoutLink = {
	args: {
		icon: "https://via.placeholder.com/20",
		text: "Login (No Action)",
		link: "#", // No action when clicked
		backgroundColor: "#121212", // Ensure text is visible
	},
};
