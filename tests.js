import globals from "globals";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config({
	name: "cobaltt7/tests",
	languageOptions: { globals: globals.nodeBuiltin },
	files: ["*.test.ts", "*.test.js"],
	rules: { "@typescript-eslint/no-magic-numbers": "off" },
});
