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
	},
	args: {
		icon: "https://via.placeholder.com/20", // Placeholder icon
		text: "Social Login",
		link: "#", // Default link
	},
};

// Primary story
export const Primary = {
	args: {
		icon: "https://via.placeholder.com/20",
		text: "Login with Social Media",
		link: "https://example.com/login", // Example link
	},
};

// With Different Icon story
export const WithDifferentIcon = {
	args: {
		icon: "https://via.placeholder.com/20?text=FB", // Facebook icon placeholder
		text: "Login with Facebook",
		link: "https://facebook.com/login",
	},
};

// Without a Link story
export const WithoutLink = {
	args: {
		icon: "https://via.placeholder.com/20",
		text: "Login (No Action)",
		link: "#", // No action when clicked
	},
};
