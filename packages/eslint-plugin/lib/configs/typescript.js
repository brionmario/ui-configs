/**
 * MIT License
 *
 * Copyright (c) 2022, Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const fs = require('fs');
const path = require('path');

/**
 * @fileoverview Entry point for the ESLint config.
 */

/**
 * Try to resolve a `tsconfig.json` file to avoid asking the user to provide one.
 */
const resolveTSConfig = () => {
  if (fs.existsSync('tsconfig.json')) {
    return path.resolve('tsconfig.json');
  }

  if (fs.existsSync('types/tsconfig.json')) {
    return path.resolve('types/tsconfig.json');
  }

  return undefined;
};

module.exports = {
  extends: ['plugin:@brionmario/javascript'],
  overrides: [
    {
      extends: ['airbnb-typescript/base', 'plugin:typescript-sort-keys/recommended'],
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2018,
        project: resolveTSConfig(),
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        // Disallow specified names in exports.
        // https://eslint.org/docs/rules/no-restricted-exports
        // FIXME: In Airbnb ruleset, `default` is also restricted which disallows `export { default } from` syntax.
        // There's a tracker (https://github.com/eslint/eslint/issues/15617) and a WIP PR to give first class support to bypass.
        // Until then, I'm allowing `default` syntax.
        // Config is copied from https://github.com/airbnb/javascript/blob/f3d3a07/packages/eslint-config-airbnb-base/rules/es6.js#L65.
        'no-restricted-exports': [
          'error',
          {
            restrictedNamedExports: [
              'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
            ],
          },
        ],
      },
    },
  ],
  rules: {},
};
