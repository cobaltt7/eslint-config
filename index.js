import { defineConfig } from "eslint/config";
import globals from "globals";
import typescriptEslint from "typescript-eslint";

import configsConfigs from "./configs.js";
import declarationsConfigs from "./declarations.js";
import globalConfigs from "./global.js";
import testsConfigs from "./tests.js";

export { globals };
/** @deprecated Use {@link defineConfig} */
export const declareConfig = typescriptEslint.config;
export default [globalConfigs, configsConfigs, declarationsConfigs, testsConfigs];
export const configs = {
	global: globalConfigs,
	configs: configsConfigs,
	declarations: declarationsConfigs,
	tests: testsConfigs,
};
