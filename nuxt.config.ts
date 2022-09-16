export default defineNuxtConfig({
	modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@vueuse/nuxt"],
	css: ["~/assets/main.css"],
	nitro: {
		plugins: ["~/server/plugins/content.ts"],
	},
	typescript: {
		shim: false,
	},
});
