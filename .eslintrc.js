module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jest/recommended',
    'plugin:jsdoc/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'react/prop-types': 'off', // react/prop-types is not compitable with typescript interface.
    'react/no-array-index-key': 'off',
    'react/jsx-props-no-spreading': 'off', // react/jsx-props-no-spreading required in overriding reactstrap component.
    'jsdoc/newline-after-description': 0, //  To support typescript in jsdoc as TypeDoc tool is able to extract types from typescript.
    'jsdoc/check-types': 0,
    'jsdoc/no-types': 0,
    'jsdoc/no-undefined-types': 0,
    'jsdoc/require-param-type': 0,
    'jsdoc/require-returns-type': 0,
    'jsdoc/valid-types': 0,
  },
  overrides: [
    {
      files: ['*.spec.tsx'],
      rules: {
        '@typescript-eslint/require-await': 'off', // to overcome act warning in testing library.
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    jsdoc: {
      mode: 'typescript',
    },
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
};
