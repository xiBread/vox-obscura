/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,md,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				mono: ["'JetBrains Mono Variable'", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
