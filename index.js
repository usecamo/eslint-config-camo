'use strict';

module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'rules': {
    'arrow-spacing': 'error',
    'eqeqeq': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'no-use-before-define': [
      'error',
      'nofunc'
    ],
    'no-var': 'error',
    'object-shorthand': 'error',
    'one-var': [
      'error',
      'never'
    ],
    'padding-line-between-statements': [
      'error',
      {
        'blankLine': 'always',
        'prev': 'directive',
        'next': '*'
      },
      {
        'blankLine': 'never',
        'prev': 'directive',
        'next': 'directive'
      },
      {
        'blankLine': 'always',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': '*'
      },
      {
        'blankLine': 'any',
        'prev': [
          'const',
          'let',
          'var'
        ],
        'next': [
          'const',
          'let',
          'var'
        ]
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': [
          'for',
          'function',
          'if',
          'switch',
          'try'
        ]
      },
      {
        'blankLine': 'always',
        'prev': [
          'for',
          'function',
          'if',
          'switch',
          'try'
        ],
        'next': '*'
      }
    ],
    'prefer-const': 'error',
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always',
      {
        'omitLastInOneLineBlock': true
      }
    ],
    'sort-imports': 'error'
  }
};
