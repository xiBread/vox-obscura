import antfu from "@antfu/eslint-config";
import prettier from "eslint-config-prettier";

export default antfu({
	stylistic: false,
	svelte: true,
	astro: true,
	rules: {
		"no-console": "off",
		"no-use-before-define": "off",
	},
}).prepend(prettier);
