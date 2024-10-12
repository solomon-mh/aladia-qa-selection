import InfoBanner from "../../components/atoms/InfoBanner.vue";

export default {
	title: "Components/Atoms/InfoBanner",
	component: InfoBanner,
	tags: ["autodocs"],
	argTypes: {
		infoTxt: {
			control: "text",
			description: "The text to display in the info banner",
		},
		customClass: {
			control: "text",
			description: "Custom CSS classes for styling the banner",
		},
	},
	args: {
		infoTxt: "Enter Your Email",
		customClass: "font-semibold text-slate-300 mb-2 text-[14px]",
	},
};

// Primary story
export const Primary = {
	args: {
		infoTxt: "Enter Your Email",
	},
};

// Custom Text story
export const CustomText = {
	args: {
		infoTxt: "Please provide a valid email address.",
	},
};

// Different Style story
export const DifferentStyle = {
	args: {
		infoTxt: "Check your inbox for verification.",
		customClass: "font-medium text-blue-400 mb-3 text-[16px]",
	},
};

// No Custom Class story
export const NoCustomClass = {
	args: {
		infoTxt: "Remember to check your spam folder!",
		customClass: "",
	},
};
