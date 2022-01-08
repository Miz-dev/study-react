module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: "true",
	},
	parserOptions: {
		sourceType: "module",
	},
	plugins: [],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"prettier",
	],
	rules: {
		"no-var": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
