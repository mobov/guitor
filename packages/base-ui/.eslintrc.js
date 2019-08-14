module.exports = {
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'off',
    'indent': 'off',
    'properties': 'never'
  },
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
