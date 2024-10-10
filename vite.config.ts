// vite.config.js or vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"~": fileURLToPath(new URL("./src", import.meta.url)), // Make sure this points to your src folder
		},
	},
});
