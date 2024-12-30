import type { config, ConfigArray } from "typescript-eslint";

import globals from "globals";

declare const configArray: ConfigArray;

export declare const declareConfig: typeof config;
export { globals };

export namespace configs {
	export { configArray as global };
	export { configArray as configs };
	export { configArray as declarations };
	export { configArray as tests };
}

declare const _default: ConfigArray[];
export default _default;
