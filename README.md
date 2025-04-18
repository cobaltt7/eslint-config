# `eslint-config-cobaltt7`

My ESLint style guide

## Adding To A Project

0. Note that this style guide only works for TypeScript projects, so ensure you have TypeScript installed and configured
   prior to setting up ESLint

1. Install the config by running:

    ```bash
    npm install eslint-config-cobaltt7 eslint --save-dev --save-exact
    ```

2. Add the following to your `package.json`:

    ```json
    "scripts": { "lint": "eslint" }
    ```

3. Create an **eslint.config.js** file with the following content:

    ```javascript
    import path from "node:path";
    import { fileURLToPath } from "node:url";

    import cobaltConfigs, { declareConfig } from "eslint-config-cobaltt7";

    export default declareConfig({ files: ["**/*.ts"] }, ...cobaltConfigs, {
    	languageOptions: {
    		parserOptions: { projectService: true, tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)) },
    	},
    });
    ```

4. Add `ignores` globs to omit certain files or folders from being linted, for example:

    ```diff
    @@ -5,6 +5,7 @@

     export default declareConfig(
     	{ files: ["**/*.ts"] },
    +	{ ignores: ["dist"] },
     	...cobaltConfigs,
     	{
     		languageOptions: {
    ```

    Make sure to put `ignores` in its own object and in the position indicated.

5. Edit project-specific configuration, i.e. `languageOptions`, `rules`, and etcetera. Put all configuration in or after
   the last object containing `languageOptions`. The `globals` package is re-exported in `eslint-config-cobaltt7`, so it
   is unneccessary to reinstall it to modify globals. Simply import it like so:

    ```javascript
    import { globals } from "eslint-config-cobaltt7";
    ```

6. To lint your code, simply run

    ```bash
    node --run lint
    ```

Congrats! You've successfully integrated ESLint into your project with `eslint-config-cobaltt7`!

## Importing specific configurations

The following configs are exported from this package independently:

```javascript
import { configs } from "eslint-config-cobaltt7";

configs.global;
configs.configs;
configs.declarations;
configs.tests;
```

Please note that, with the exeption of `global`, all of these configs include `files` overrides that may need to be
overridden for the config to behave as expected.
