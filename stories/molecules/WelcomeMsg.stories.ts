import WelcomeMsg from "../../components/molecules/WelcomeMsg.vue";
export default {
	title: "Components/Molecules/WelcomeMsg",
	component: WelcomeMsg,
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: "text",
			description: "The title displayed in the welcome message",
		},
		message: {
			control: "text",
			description: "The message displayed below the title",
		},
	},
	args: {
		title: "Welcome to Aladia,",
		message: "Create or access your account from here.",
	},
};

// Primary story
export const Primary = {
	args: {
		title: "Welcome to Aladia,",
		message: "Create or access your account from here.",
	},
};

// Custom Message story
export const CustomMessage = {
	args: {
		title: "Hello, User!",
		message: "Please log in to continue.",
	},
};

// Short Message story
export const ShortMessage = {
	args: {
		title: "Welcome!",
		message: "Glad to see you here.",
	},
};
