import { defineConfig } from "cypress";

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		experimentalStudio: true,
		baseUrl: "https://localhost:3000",
	},
	waitForAnimations: false,
	animationDistanceThreshold: 50,
	component: {
		devServer: {
			framework: "vue",
			bundler: "vite",
		},
	},
});
