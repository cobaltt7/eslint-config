import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "eslint/config";
import globals from "globals";

import configsConfigs from "./configs.js";
import cobaltConfigs from "./index.js";

export default defineConfig([
	{ files: ["**/*.d.ts"] },
	...cobaltConfigs,
	{
		languageOptions: {
			globals: globals.nodeBuiltin,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
			},
		},
	},
	...configsConfigs.map((configs) => ({ ...configs, files: ["./**/*.js"] })),
]);
