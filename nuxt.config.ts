import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@vueuse/nuxt"],
	css: ["@/assets/main.css"],
	typescript: {
		shim: false,
	},
});
