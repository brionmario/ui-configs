---
"@brionmario/eslint-plugin": patch
---

`next/core-web-vitals` inherits react eslint plugins that conflicts with internal `react` shareable config. Hence, it would be best to only extend `plugin:@next/next/recommended` from the `next` shareable config. See https://nextjs.org/docs/basic-features/eslint#recommended-plugin-ruleset.
