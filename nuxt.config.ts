import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content"],
	css: ["@/assets/main.css"],
	typescript: {
		shim: false,
	},
});
