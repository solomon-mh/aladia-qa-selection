import Logo from "../../components/atoms/Logo.vue";
export default {
	title: "Components/Atoms/Logo",
	component: Logo,
	argTypes: {
		src: {
			control: "text",
			description: "Source of the image file.",
			defaultValue: "/logo/logo.png",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "/logo/logo.png" },
			},
		},
		alt: {
			control: "text",
			description: "Alternative text for the image.",
			defaultValue: "logo",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "logo" },
			},
		},
		width: {
			control: "number",
			description: "Width of the image (in pixels).",
			defaultValue: 160,
			table: {
				type: { summary: "number | string" },
				defaultValue: { summary: 160 },
			},
		},
		height: {
			control: "number",
			description: "Height of the image (in pixels).",
			defaultValue: 160,
			table: {
				type: { summary: "number | string" },
				defaultValue: { summary: 160 },
			},
		},
		imgClasses: {
			control: "text",
			description: "Additional Tailwind CSS classes to style the image.",
			defaultValue: "w-40 h-40",
			table: {
				type: { summary: "string" },
				defaultValue: { summary: "w-40 h-40" },
			},
		},
	},
};

import type { StoryFn } from "@storybook/vue3";

const Template: StoryFn = (args) => ({
	components: { Logo },
	setup() {
		return { args };
	},
	template: '<Logo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
	src: "/logo/logo.png",
	alt: "Logo",
	width: 160,
	height: 160,
	imgClasses: "w-40 h-40",
};

export const CustomLogo = Template.bind({});
CustomLogo.args = {
	src: "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png",
	alt: "Custom Logo",
	width: 100,
	height: 100,
	imgClasses: "w-24 h-24",
};
