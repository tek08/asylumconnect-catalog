var WARNING = 1;
var DISABLE = 0;
module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],

  plugins: ['react', 'import', 'prettier'],

  globals: {
    google: true,
  },

  env: {
    es6: true,
    commonjs: true,
    browser: true,
  },

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      generators: true,
      experimentalObjectRestSpread: true,
    },
  },

  rules: {
    'react/jsx-filename-extension': [
      WARNING,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'jsx-a11y/label-has-for': DISABLE,
    camelcase: DISABLE,
    'react/forbid-prop-types': DISABLE,
    'no-class-assign': DISABLE,
    'react/require-default-props': DISABLE,
    'import/no-mutable-exports': DISABLE,
    'jsx-a11y/no-noninteractive-element-to-interactive-role': DISABLE,
    'jsx-a11y/click-events-have-key-events': DISABLE,
    'jsx-a11y/no-static-element-interactions': DISABLE,
    'react/no-unescaped-entities': DISABLE,
    'arrow-body-style': DISABLE,
    'no-debugger': DISABLE,
    'react/jsx-indent': DISABLE,
    'prettier/prettier': 'error',
    'jsx-a11y/anchor-is-valid': DISABLE,
  },
};
