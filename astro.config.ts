import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
	integrations: [tailwind({ applyBaseStyles: false })],
	vite: {
		plugins: [glsl()],
	},
});
