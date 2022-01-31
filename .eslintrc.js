module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    '@vue/airbnb'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'eol-last': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-trailing-spaces': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

  }
}
