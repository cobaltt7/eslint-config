import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config({
	name: "cobaltt7/configs",
	files: ["**/*.config.js"],
	rules: {
		"id-match": "off",
		"unicorn/prevent-abbreviations": "off",
		"unicorn/string-content": "off",
	},
});
