// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)

import type { StorybookConfig } from "@nuxtjs/storybook";

const config: StorybookConfig = {
	framework: "@storybook-vue/nuxt",
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	core: {
		builder: {
			name: "@storybook/builder-vite",
			options: {
				fsCache: true,
				lazyCompilation: true,
			},
		},
	},
};

export default config;
