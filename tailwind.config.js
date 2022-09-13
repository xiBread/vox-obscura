/**
 * @type {import("tailwindcss").Config}
 */
module.exports = {
	plugins: [require("@tailwindcss/typography"), require("@headlessui/tailwindcss")],
	content: ["./content/**/*.md"],
	theme: {
		fontFamily: {
			mono: ["'Roboto Mono'", "monospace"],
		},
	},
};
