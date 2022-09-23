import headlessui from "@headlessui/tailwindcss";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
	plugins: [typography, headlessui],
	content: ["./content/**/*.md"],
	theme: {
		fontFamily: {
			mono: ["'Roboto Mono'", "monospace"],
		},
	},
} as Config;
