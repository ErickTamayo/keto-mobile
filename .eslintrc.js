module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:jest/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
  },
  parserOptions: {
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
}
