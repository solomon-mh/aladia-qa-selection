import WelcomeNote from "../../components/atoms/WelcomeNote.vue";

export default {
	title: "Components/Atoms/WelcomeNote",
	component: WelcomeNote,
	tags: ["autodocs"],
	argTypes: {
		message: {
			control: "text",
			description: "The message text to display in the note",
		},
	},
	args: {
		message: "Create or access your account from here.",
	},
};

// Primary story
export const Primary = {
	args: {
		message: "Create or access your account from here.",
	},
};

// Custom Message story
export const CustomMessage = {
	args: {
		message: "Welcome back! Please log in to continue.",
	},
};

// Short Message story
export const ShortMessage = {
	args: {
		message: "Welcome!",
	},
};

// Long Message story
export const LongMessage = {
	args: {
		message:
			"This is a longer note that provides additional instructions or information about accessing the account.",
	},
};
