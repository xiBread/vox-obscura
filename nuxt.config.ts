export default defineNuxtConfig({
	modules: ["@nuxtjs/algolia", "@nuxtjs/tailwindcss", "@nuxt/content", "@vueuse/nuxt"],
	css: ["~/assets/main.css"],
	nitro: {
		plugins: ["~/server/plugins/content.ts"],
	},
	typescript: {
		shim: false,
		strict: true,
	},
	algolia: {
		apiKey: "b82ae5e1e5474f93e7e72d56b4a735a8",
		applicationId: "4V3K71ASE8",
	},
	content: {
		documentDriven: true,
		navigation: {
			fields: ["description"],
		},
	},
});
