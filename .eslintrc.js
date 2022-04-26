module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: ['airbnb-typescript-prettier'],
	ignorePatterns: ['src/generated/*.tsx'],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	rules: {
		'react/destructuring-assignment': 'off',
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'import/prefer-default-export': 'off',
		'no-useless-constructor': 'off',
		'class-methods-use-this': 'off',
		'max-classes-per-file': ['error', 3],
		'import/no-cycle': 'off',
		'no-nested-ternary': 'off',
		'import/no-extraneous-dependencies': 'off',
		'react/jsx-props-no-spreading': 'off',
		'jsx-a11y/accessible-emoji': 'warn',
		'consistent-return': 'off',
		'jsx-a11y/no-redundant-roles': 'off',
		'jsx-a11y/aria-role': 'off',
		'no-underscore-dangle': 'off',
		'react/require-default-props': 'off',
		'prettier/prettier': [
			'error',

			{
				endOfLine: 'auto',
			},
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react-hooks/exhaustive-deps': 'warn',
		'@typescript-eslint/no-shadow': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'jsx-a11y/accessible-emoji': 'off',
	},
};