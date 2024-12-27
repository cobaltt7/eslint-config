import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config({
	name: "cobaltt7/declarations",
	files: ["**/*.d.ts"],
	rules: {
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/naming-convention": "off",
		"@typescript-eslint/no-unused-vars": "off",
	},
});
