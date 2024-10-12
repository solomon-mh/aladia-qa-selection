import Icon from "../../components/atoms/Icon.vue";

export default {
	title: "Components/Atoms/Icon",
	component: Icon,
	tags: ["autodocs"],
	argTypes: {
		icon: {
			control: "text",
			description: "The FontAwesome icon class to display.",
			defaultValue: "fa-solid fa-person",
		},
		iconWrapperClass: {
			control: "text",
			description: "CSS classes for the icon wrapper.",
		},
		iconClass: {
			control: "text",
			description: "CSS classes for the icon itself.",
		},
	},
	args: {
		icon: "fa-solid fa-person",
		iconWrapperClass:
			"flex w-10 items-center justify-center opacity-70 text-xl",
		iconClass: "text-base text-black/70",
	},
};

// Primary story
export const Default = {
	render: () => ({
		components: { Icon },
		template: `<Icon :icon="icon" />`,
		data() {
			return {
				icon: "fa-solid fa-person",
			};
		},
	}),
};

// Story with custom icon
export const CustomIcon = {
	render: () => ({
		components: { Icon },
		template: `<Icon :icon="'fa-solid fa-heart'" />`,
	}),
};

// Story with custom classes
export const CustomClasses = {
	render: () => ({
		components: { Icon },
		template: `
      <Icon 
        icon="fa-solid fa-star" 
        iconWrapperClass="flex w-12 items-center justify-center text-blue-500" 
        iconClass="text-lg text-yellow-400" 
      />
    `,
	}),
};
