---
"@brionmario/eslint-plugin": patch
---

In Airbnb ruleset, `default` is also restricted which disallows `export { default } from` syntax. There's a tracker and a WIP PR to give first class support to bypass. Until then, I'm allowing `default` syntax. Config is copied from https://github.com/airbnb/javascript/blob/f3d3a07/packages/eslint-config-airbnb-base/rules/es6.js#L65.
