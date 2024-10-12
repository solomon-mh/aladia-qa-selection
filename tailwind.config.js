/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./stories/**/*.{js,ts}",
		"./*.{vue,js,ts,jsx,tsx}",
		"./app.vue",
		"./error.vue",
	],
	darkMode: ["class", '[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [],
};
