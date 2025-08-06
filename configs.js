import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config({
	name: "cobaltt7/configs",
	files: ["**/*.config.js"],
	languageOptions: { globals: globals.nodeBuiltin },
	rules: {
		"id-match": "off",
		"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
		"unicorn/prevent-abbreviations": "off",
		"unicorn/string-content": "off",
	},
});
