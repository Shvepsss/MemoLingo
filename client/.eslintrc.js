
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'import',
    'react',
    'jsx-expressions',
  ],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
  ],
  globals: {
    If: 'readonly',
    Choose: 'readonly',
    When: 'readonly',
    Otherwise: 'readonly',
    JSX: 'readonly',
  },
  parserOptions: {
    requireConfigFile: false,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    '@typescript-eslint/consistent-type-exports': [
      'error',
      { fixMixedExportsWithInlineTypeSpecifier: true },
    ],

    'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],

    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'if', next: '*' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'any', prev: 'const', next: 'if' },
      { blankLine: 'never', prev: 'let', next: 'if' },
      { blankLine: 'always', prev: 'block-like', next: 'case' },
      { blankLine: 'always', prev: 'expression', next: 'case' },
      { blankLine: 'always', prev: 'return', next: 'case' },
      { blankLine: 'any', prev: 'case', next: 'case' },
      { blankLine: 'never', prev: 'singleline-const', next: 'singleline-const' },
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-nested-ternary': 'error',

    'jsx-expressions/strict-logical-expressions': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }],
    'react/require-default-props': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react-native/no-inline-styles': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'import/default': 'off',
    'import/newline-after-import': 'warn',
    'import/namespace': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'app/**',
            group: 'internal',
          },
          {
            pattern: 'storybook-local/.ondevice/**/*',
            group: 'internal',
          },
          {
            pattern: 'lang',
            group: 'internal',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    projectRoot: __dirname,
  },
};
