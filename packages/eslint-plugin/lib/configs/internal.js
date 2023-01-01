/**
 * MIT License
 *
 * Copyright (c) 2022, Brion Mario.
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
 * @fileoverview ESLint config to be used in React based projects.
 */

const LICENSE_HEADER_PATTERN_OVERRIDE_FILE_NAME = 'license-header-override.js';

/**
 * Check if an override license header file is defined , if so,
 * return that else return the default license header pattern.
 *
 * @example
 * Here's a simple example of overriding the license header pattern.:
 * ```
 * // create a `license-header-override.js` at the same level of `.eslintrc.js`
 * module.exports = [
 *     " * New Company.",
       " * Copyright 2022.",
 * ];
 * ```
 *
 * @returns License Header Pattern.
 */
const getLicenseHeaderPattern = () => {
  const LICENSE_HEADER_DEFAULT_PATTERN = [
    '*',
    ' * MIT License',
    ' *',
    {
      pattern: ' Copyright \\(c\\) \\d{4}, Brion Mario',
      template: ` * Copyright (c) ${new Date().getFullYear()}, Brion Mario`,
    },
    ' *',
    ' * Permission is hereby granted, free of charge, to any person obtaining a copy',
    ' * of this software and associated documentation files (the "Software"), to deal',
    ' * in the Software without restriction, including without limitation the rights',
    ' * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell',
    ' * copies of the Software, and to permit persons to whom the Software is',
    ' * furnished to do so, subject to the following conditions:',
    ' *',
    ' * The above copyright notice and this permission notice shall be included in all',
    ' * copies or substantial portions of the Software.',
    ' *',
    ' * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR',
    ' * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,',
    ' * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE',
    ' * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER',
    ' * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,',
    ' * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE',
    ' * SOFTWARE.',
    ' ',
  ];

  if (!fs.existsSync(path.resolve(__dirname, LICENSE_HEADER_PATTERN_OVERRIDE_FILE_NAME))) {
    return LICENSE_HEADER_DEFAULT_PATTERN;
  }

  // eslint-disable-next-line import/no-dynamic-require, global-require
  return require(path.resolve(__dirname, LICENSE_HEADER_PATTERN_OVERRIDE_FILE_NAME));
};

module.exports = {
  plugins: ['header'],
  rules: {
    // Enforce Brion's based license header on files.
    // https://github.com/Stuk/eslint-plugin-header
    'header/header': ['warn', 'block', getLicenseHeaderPattern(), 2],
  },
};
