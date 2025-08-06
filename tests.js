import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
	name: "cobaltt7/tests",
	languageOptions: { globals: globals.nodeBuiltin },
	files: ["*.test.ts", "*.test.js"],
	rules: { "@typescript-eslint/no-magic-numbers": "off" },
});
