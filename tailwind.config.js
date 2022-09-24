/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
	plugins: [require("@tailwindcss/typography")],
	content: ["./content/**/*.md"],
	theme: {
		fontFamily: {
			mono: ["'Roboto Mono'", "monospace"],
		},
	},
};
