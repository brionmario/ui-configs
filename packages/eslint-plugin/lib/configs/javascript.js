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

/**
 * @fileoverview ESLint config to be used in JavaScript based projects.
 */

module.exports = {
  extends: ['plugin:@brionmario/core', 'airbnb-base'],
  rules: {
    // Allow dev dependencies to be used in test specs and storybook files.
    // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.?(j|t)s', '**/*.spec.?(j|t)s', '**/*.stories.?(j|t)s?(x)', '**/*.stories.mdx'],
      },
    ],
    // Bit harsh rule, some developers will like to have consistent exports in a module.
    // If there are a mixture of export types, the imports will look ugly.
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
    // Enforces sorting object properties in alphabetical order for readability.
    // https://eslint.org/docs/latest/rules/sort-keys
    'sort-keys': ['error', 'asc', {caseSensitive: true, minKeys: 2, natural: false}],
  },
};
