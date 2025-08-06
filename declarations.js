import { defineConfig } from "eslint/config";

export default defineConfig({
	files: ["**/*.d.ts"],
	name: "cobaltt7/declarations",
	rules: {
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-unused-vars": "off",
		"one-var": ["error", "never"],
	},
});
