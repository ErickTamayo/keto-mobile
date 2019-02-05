module.exports = {
  extends: ['airbnb', 'universe/native', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
}
