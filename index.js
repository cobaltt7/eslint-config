import globals from "globals";
import typescriptEslint from "typescript-eslint";

import configsConfig from "./configs.js";
import declarationsConfig from "./declarations.js";
import globalConfig from "./global.js";
import testsConfig from "./tests.js";

export { globals };
export const declareConfig = typescriptEslint.config;
export default [globalConfig, configsConfig, declarationsConfig, testsConfig];
export const configs = {
	global: globalConfig,
	configs: configsConfig,
	declarations: declarationsConfig,
	tests: testsConfig,
};
