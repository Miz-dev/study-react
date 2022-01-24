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
		"plugin:@next/next/recommended",
		"prettier",
	],
	rules: {
		"no-var": "error",
		"react/prop-types": "off",
		"jsx-a11y/anchor-is-valid": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
