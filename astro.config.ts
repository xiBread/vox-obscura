import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	build: {
		format: "file",
	},
	integrations: [tailwind()],
});
