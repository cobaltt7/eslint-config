import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig({
	files: ["*.test.ts", "*.test.js"],
	languageOptions: { globals: globals.nodeBuiltin },
	name: "cobaltt7/tests",
	rules: { "@typescript-eslint/no-magic-numbers": "off" },
});
