import { defineConfig } from "astro/config";
import glsl from "vite-plugin-glsl";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	vite: {
		plugins: [glsl(), tailwindcss()],
	},
});
