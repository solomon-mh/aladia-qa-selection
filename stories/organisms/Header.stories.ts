import Header from "../../components/organisms/Header.vue";

export default {
	title: "Components/Organisms/Header",
	component: Header,
	tags: ["autodocs"],
	argTypes: {
		headerClasses: {
			control: "text",
			description: "Custom CSS classes for styling the header",
		},
	},
	args: {
		headerClasses:
			"login-header-bg relative bg-opacity-25 flex mx-auto mb-2 h-32 justify-center border-[1px] rounded border-gray-700 items-center",
	},
};

// Primary story
export const Primary = {
	args: {
		headerClasses:
			"login-header-bg relative bg-opacity-25 flex mx-auto mb-2 h-32 justify-center border-[1px] rounded border-gray-700 items-center",
		// Slot content can be added here if needed
	},
};

// Custom Style story
export const CustomStyle = {
	args: {
		headerClasses:
			"bg-blue-500 text-white flex items-center justify-center h-32 rounded",
	},
};

// No Custom Class story
export const NoCustomClass = {
	args: {
		headerClasses: "",
		// Slot content can be added here if needed
	},
};
