module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: [
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		"linebreak-style": ["error", "windows"],
		"comma-dangle": ["error", "never"],
		"indent": ["error", 4],
		"no-tabs": 0,
		"no-underscore-dangle": 0,
		"import/no-cycle": 0
	},
};
