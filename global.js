import js from "@eslint/js";
import unicorn from "eslint-plugin-unicorn";
import typescriptEslint from "typescript-eslint";

export default typescriptEslint.config(
	{ name: "eslint/js/all", ...js.configs.all },
	...typescriptEslint.configs.all,
	unicorn.configs["flat/all"],
	{
		name: "cobaltt7/global",
		linterOptions: { reportUnusedDisableDirectives: "error" },
		rules: {
			"@typescript-eslint/consistent-return": "off",
			"@typescript-eslint/consistent-type-assertations": ["error", {
    arrayLiteralTypeAssertions: 'allow-as-parameter',
    objectLiteralTypeAssertions: 'allow-as-parameter',
  },
],
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{
					allowConciseArrowFunctionExpressionsStartingWithVoid: true,
					allowExpressions: true,
					allowIIFEs: true,
				},
			],
			"@typescript-eslint/explicit-member-accessibility": [
				"error",
				{ accessibility: "no-public", overrides: { parameterProperties: "explicit" } },
			],
			"@typescript-eslint/init-declarations": "off",
			"@typescript-eslint/max-params": ["warn", { max: 4 }],
			"@typescript-eslint/member-ordering": "off",
			"@typescript-eslint/method-signature-style": ["error", "method"],
			"@typescript-eslint/naming-convention": [
				// TODO: look into different types
				"error",
				{
					custom: { match: false, regex: /\d/u.source },
					format: ["camelCase", "PascalCase", "UPPER_CASE"],
					selector: ["import", "variable"],
				},
				{
					custom: { match: false, regex: /\d/u.source },
					format: ["camelCase"],
					selector: ["function", "method", "parameterProperty"],
				},
				{
					custom: { match: false, regex: /\d/u.source },
					leadingUnderscore: "allow",
					format: ["camelCase"],
					selector: "parameter",
				},
				{
					custom: { match: false, regex: /\d/u.source },
					format: ["camelCase", "UPPER_CASE"],
					selector: "classProperty",
				},
				{
					custom: { match: false, regex: /\d/u.source },
					format: ["PascalCase"],
					selector: ["enumMember", "typeLike"],
				},
				{
					custom: { match: false, regex: /^T[A-Z]|\d/u.source },
					format: ["PascalCase"],
					leadingUnderscore: "allow",
					selector: ["typeParameter"],
				},
			],
			"@typescript-eslint/no-deprecated": "warn",
			"@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
			"@typescript-eslint/no-floating-promises": ["error", { checkThenables: true }],
			"@typescript-eslint/no-magic-numbers": [
				"off", // TODO
				{
					enforceConst: true,
					ignore: [-1, 0, 0.5, 1, 2, 3, 5, 10, 16, 100, 1000, 1005, 1024],
					ignoreArrayIndexes: true,
					// ignoreClassFieldInitialValues: true,
					// ignoreDefaultValues: true,
					// ignoreEnums: true,
					ignoreNumericLiteralTypes: true,
					// ignoreReadonlyClassProperties: true,
					ignoreTypeIndexes: true,
				},
			],
			"@typescript-eslint/no-misused-promises": ["error", { checksVoidReturn: false }],
			"@typescript-eslint/no-shadow": [
				"error",
				{ builtinGlobals: true, ignoreOnInitialization: true },
			],
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-type-assertion": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ args: "all", argsIgnorePattern: /^_+$/u.source, reportUsedIgnorePattern: true },
			],
			"@typescript-eslint/no-use-before-define": "off",
			"@typescript-eslint/parameter-properties": ["error", { prefer: "parameter-property" }],
			"@typescript-eslint/prefer-enum-initializers": "off",
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{ ignoreMixedLogicalExpressions: true, ignorePrimitives: true },
			],
			"@typescript-eslint/prefer-readonly-parameter-types": "off",
			"@typescript-eslint/promise-function-async": "off",
			"@typescript-eslint/restrict-template-expressions": [
				"error",
				{ allowAny: false, allowBoolean: false, allowNullish: false, allowRegExp: false },
			],
			"@typescript-eslint/return-await": ["error", "always"],
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/switch-exhaustiveness-check": [
				"error",
				{
					allowDefaultCaseForExhaustiveSwitch: false,
					considerDefaultExhaustiveForUnions: true,
				},
			],
			"@typescript-eslint/typedef": "off",
			"@typescript-eslint/use-unknown-in-catch-callback-variable": "off",
			"camelcase": "off",
			"capitalized-comments": "off",
			"complexity": "off",
			"curly": ["error", "multi"],
			"default-case": "off",
			"func-style": ["error", "declaration"],
			"grouped-accessor-pairs": ["error", "getBeforeSet"],
			"id-length": "off",
			"logical-assignment-operators": ["error", "always", { enforceForIfStatements: true }],
			"max-classes-per-file": "off",
			"max-lines": "off",
			"max-lines-per-function": "off",
			"max-statements": "off",
			"no-alert": "off",
			"no-await-in-loop": "off",
			"no-bitwise": "off",
			"no-console": "off",
			"no-continue": "off",
			"no-div-regex": "off",
			"no-duplicate-imports": "off",
			"no-eval": "off",
			"no-fallthrough": [
				"error",
				{
					allowEmptyCase: true,
					commentPattern: /[Ff]alls?[ -]?through/u.source,
					reportUnusedFallthroughComment: true,
				},
			],
			"no-implicit-coercion": [
				"error",
				{ allow: ["!!", "+"], disallowTemplateShorthand: true },
			],
			"no-inline-comments": "off",
			"no-labels": "off",
			"no-plusplus": "off",
			"no-proto": "off",
			"no-restricted-syntax": [
				"error",
				{
					message: "Prefer `#toString()` over `String()`",
					selector: "CallExpression[callee.name='String']",
				},
				{
					message: "Prefer `Record` over an index signature",
					selector: "TSIndexSignature",
				},
			],
			"no-sparse-arrays": "off",
			"no-ternary": "off",
			"no-undefined": "off",
			"no-underscore-dangle": "off",
			"no-void": "off",
			"no-warning-comments": ["warn", { location: "anywhere" }],
			"one-var": ["error", { initialized: "never", uninitialized: "always" }],
			"require-atomic-updates": "off",
			"require-unicode-regexp": "off",
			"sort-imports": "off",
			"sort-keys": "off",
			"unicorn/catch-error-name": ["error", { ignore: [/(?:E|^e)rror(?:[^a-z]|$)/u] }],
			"unicorn/consistent-destructuring": "off",
			"unicorn/explicit-length-check": "off",
			"unicorn/filename-case": ["error", { case: "kebabCase" }],
			"unicorn/no-array-callback-reference": "off",
			"unicorn/no-array-reduce": "off",
			"unicorn/no-await-expression-member": "off",
			"unicorn/no-keyword-prefix": "off",
			"unicorn/no-nested-ternary": "off",
			"unicorn/no-null": "off",
			"unicorn/no-process-exit": "off",
			"unicorn/no-unreadable-array-destructuring": "off",
			"unicorn/number-literal-case": "off",
			"unicorn/prefer-ternary": ["error", "only-single-line"],
			"unicorn/prevent-abbreviations": [
				"warn",
				{
					checkDefaultAndNamespaceImports: true,
					checkShorthandImports: true,
					checkShorthandProperties: true,
					replacements: {
						arg: false,
						args: false,
						attr: false,
						attrs: false,
						cmd: { command: true },
						dev: false,
						dist: false,
						docs: false,
						dst: false,
						env: false,
						envs: false,
						func: false,
						function: { func: true },
						mod: false,
						pkg: false,
						prod: false,
						res: false,
						sa: { scratchAddons: true },
						usr: { user: true },
					},
				},
			],
			"unicorn/relative-url-style": ["error", "always"],
			"unicorn/string-content": [
				"error",
				{
					patterns: {
						[/\.{3}/gu.source]: "…",
						[/"/gu.source]: { message: 'Prefer `“` or `”` over `"`.', suggest: '"' },
						[/'/gu.source]: "’",
						[/->/gu.source]: "→",
						[/!\?/gu.source]: "⁉",
						[/:_+:/gu.source]: ":emoji:",
					},
				},
			],
			"yoda": ["error", "never", { exceptRange: true }],
		},
	},
);
