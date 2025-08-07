import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
	files: ["**/*.config.js", "**/*rc.js"],
	languageOptions: { globals: globals.nodeBuiltin },
	name: "cobaltt7/configs",
	rules: {
		"id-match": "off",
		"sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
		"unicorn/prevent-abbreviations": "off",
		"unicorn/string-content": "off",
	},
});
