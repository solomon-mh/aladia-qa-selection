import WelcomeHeader from "../../components/atoms/WelcomeHeader.vue";
export default {
	title: "Components/Atoms/WelcomeHeader",
	component: WelcomeHeader,
	tags: ["autodocs"],
	argTypes: {
		title: {
			control: "text",
			description: "The title text to display in the header",
		},
	},
	args: {
		title: "Welcome to Aladia,",
	},
};

// Primary story
export const Primary = {
	args: {
		title: "Welcome to Aladia,",
	},
};

// Custom Title story
export const CustomTitle = {
	args: {
		title: "Hello, User!",
	},
};

// Short Title story
export const ShortTitle = {
	args: {
		title: "Welcome!",
	},
};

// Long Title story
export const LongTitle = {
	args: {
		title: "This is a longer title that spans multiple words",
	},
};
