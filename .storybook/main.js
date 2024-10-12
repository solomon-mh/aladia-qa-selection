/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
	stories: [
		// "../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
	core: {
		builder: {
			name: "@storybook/builder-vite",
			options: {
				fsCache: true,
				lazyCompilation: true,
			},
		},
		docs: {
			autodocs: "tag",
		},
		staticDirs: ["../public"],
	},
};
export default config;
