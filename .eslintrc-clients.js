const { resolve } = require('path');

const config = {
  extends: ['airbnb'],
  env: {
    browser: true,
    amd: true,
    node: true,
    jest: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  plugins: ['react', 'import',  "@typescript-eslint", "simple-import-sort", "jest"],
  rules: {
    'no-console': 'off',
    'react/no-array-index-key': 'off',
    'react/prop-types': 'off',
    "no-use-before-define": "off",
    "react/jsx-one-expression-per-line": 'off',
    "max-len": "off",
    'import/no-extraneous-dependencies': [
      'error',
      // Use package.json from both this package folder and root.
      { packageDir: [__dirname, process.cwd()] }
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/forbid-prop-types': ['warn', { forbid: ['any'] }],
    'react/require-default-props': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'object-curly-newline': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-debugger': 'off',
    'react/no-multi-comp': 'off',
    'import/prefer-default-export': 'off',
    'function-paren-newline': 'off',
    'no-unused-expressions': 'off',
    'no-multi-assign': 'off',
    'camelcase': 'off',
    'no-return-assign': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    'import/resolver': {
      "typescript": {
        "alwaysTryTypes": true,
        "project": [
          "packages/*/tsconfig.json",
        ]
      },
      "node": {
        "project": ["packages/*/tsconfig.json"]
      },
      'eslint-import-resolver-lerna': {
        packages: resolve(__dirname, 'packages')
      }
    },
  },
};
module.exports = config;
