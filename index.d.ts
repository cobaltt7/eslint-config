import type { Linter } from "eslint";
import type { config } from "typescript-eslint";

import { defineConfig } from "eslint/config";
import globals from "globals";

declare const configType: Linter.Config;

/** @deprecated Use {@link defineConfig} */
export declare const declareConfig: typeof config;
export { globals };

export namespace configs {
	export { configType as global };
	export { configType as configs };
	export { configType as declarations };
	export { configType as tests };
}

declare const _default: Linter.Config[];
export default _default;
