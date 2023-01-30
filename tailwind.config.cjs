/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,md,mdx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				mono: ["'Roboto Mono'", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
