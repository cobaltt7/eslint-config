import globals from "globals";

import configs from "./configs.js";
import declarations from "./declarations.js";
import global from "./global.js";
import tests from "./tests.js";

export { globals as _globals, global, configs, declarations, tests };

export default [global, configs, declarations, tests];
