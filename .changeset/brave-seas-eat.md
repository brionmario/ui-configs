---
"@brionmario/eslint-plugin": patch
---

Update no-extraneous glob:

```js
'import/no-extraneous-dependencies': [
  'error',
  {
    devDependencies: [
      '**/*.config.*', // Match config files in JS, TS, CJS, and MJS
      '**/scripts/*.{js,ts,cjs,mjs}', // Match script files in JS and TS
      '**/*.stories.*', // Storybook files
      '**/*.test.*', // Test files in JS and TS
      '**/*.spec.*', // Spec files in JS and TS
      '**/__tests__/**', // Test directories
      '**/__mocks__/**', // Mock directories
      'test-configs/**', // Test configuration files
    ],
  },
```
