import globals from "globals";
import { config, FlatConfig } from "typescript-eslint";

declare const configArray: FlatConfig.ConfigArray;

export declare const declareConfig: typeof config;
export { globals };

export namespace configs {
	export { configArray as global };
	export { configArray as configs };
	export { configArray as declarations };
	export { configArray as tests };
}

declare const _default: FlatConfig.ConfigArray[];
export default _default;
