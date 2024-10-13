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
		logoSrc: {
			control: "text",
			description: "The URL or path to the logo image",
		},
	},
	args: {
		headerClasses:
			"login-header-bg relative bg-opacity-25 flex mx-auto mb-2 h-32 justify-between border-[1px] rounded border-gray-700 items-center",
		logoSrc: "https://via.placeholder.com/150", // Default logo
	},
};

// Primary story
export const Primary = {
	args: {
		headerClasses:
			"login-header-bg relative bg-opacity-25 flex mx-auto mb-2 h-32 justify-between border-[1px] rounded border-gray-700 items-center",
	},
};

// Custom Style story
export const CustomStyle = {
	args: {
		headerClasses:
			"bg-blue-500 text-white flex items-center justify-between h-32 rounded",
		logoSrc: "https://via.placeholder.com/150", // Example logo
	},
};

// No Custom Class story
export const NoCustomClass = {
	args: {
		headerClasses: "",
		logoSrc: "https://via.placeholder.com/150", // Example logo
	},
};
