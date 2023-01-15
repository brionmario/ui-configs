# @brionmario/eslint-plugin

## 0.2.10

### Patch Changes

- [#24](https://github.com/brionmario/ui-configs/pull/24) [`7ba7fcd`](https://github.com/brionmario/ui-configs/commit/7ba7fcd023129bb77191d6938d251eadad210e3a) Thanks [@brionmario](https://github.com/brionmario)! - `no-restricted-exports` was put in first level `rules` hash in TS ruleset but it should go in overrides instead.

## 0.2.9

### Patch Changes

- [#22](https://github.com/brionmario/ui-configs/pull/22) [`f8521c3`](https://github.com/brionmario/ui-configs/commit/f8521c315184883fcdc5fe281c53550ad8b9464f) Thanks [@brionmario](https://github.com/brionmario)! - `no-restricted-exports` rule was modified to allow `export {default} from` syntax in https://github.com/brionmario/ui-configs/pull/20. But, it's not working for TS files.

## 0.2.8

### Patch Changes

- [#20](https://github.com/brionmario/ui-configs/pull/20) [`390d423`](https://github.com/brionmario/ui-configs/commit/390d42355bd402b3d1fdf6101f5afd2cb59e1b29) Thanks [@brionmario](https://github.com/brionmario)! - In Airbnb ruleset, `default` is also restricted which disallows `export { default } from` syntax. There's a tracker and a WIP PR to give first class support to bypass. Until then, I'm allowing `default` syntax. Config is copied from https://github.com/airbnb/javascript/blob/f3d3a07/packages/eslint-config-airbnb-base/rules/es6.js#L65.

## 0.2.7

### Patch Changes

- [#18](https://github.com/brionmario/ui-configs/pull/18) [`32f8aaf`](https://github.com/brionmario/ui-configs/commit/32f8aaf6b228a071e5c5c634b7818d7247578c4b) Thanks [@brionmario](https://github.com/brionmario)! - Turn off `import/no-extraneous-dependencies`

## 0.2.6

### Patch Changes

- [#16](https://github.com/brionmario/ui-configs/pull/16) [`74f4a2c`](https://github.com/brionmario/ui-configs/commit/74f4a2c0bc5c0b427d6779cf094b97dac0b7685c) Thanks [@brionmario](https://github.com/brionmario)! - Configs can even be `cjs`, `mjs` etc

## 0.2.5

### Patch Changes

- [#14](https://github.com/brionmario/ui-configs/pull/14) [`091da61`](https://github.com/brionmario/ui-configs/commit/091da61f439c02e0098b4b0051fb8275b88c6beb) Thanks [@brionmario](https://github.com/brionmario)! - We should allow scripts and configs to use dev dependencies

## 0.2.4

### Patch Changes

- [#12](https://github.com/brionmario/ui-configs/pull/12) [`689e433`](https://github.com/brionmario/ui-configs/commit/689e4333aa2a468b993be8bed49fee003ee08a16) Thanks [@brionmario](https://github.com/brionmario)! - There should not be a period `.` after `Brion Mario` in the copyright header.

## 0.2.3

### Patch Changes

- [#10](https://github.com/brionmario/ui-configs/pull/10) [`a9316e5`](https://github.com/brionmario/ui-configs/commit/a9316e5feac26c96ec054afbdd04c4e94bb7d824) Thanks [@brionmario](https://github.com/brionmario)! - There should be a period `.` after `Brion Mario` in the copyright header.

## 0.2.2

### Patch Changes

- [#8](https://github.com/brionmario/ui-configs/pull/8) [`12fca71`](https://github.com/brionmario/ui-configs/commit/12fca719df429fce80e4f07624ff8b8e19699e5f) Thanks [@brionmario](https://github.com/brionmario)! - `next/core-web-vitals` inherits react eslint plugins that conflicts with internal `react` shareable config. Hence, it would be best to only extend `plugin:@next/next/recommended` from the `next` shareable config. See https://nextjs.org/docs/basic-features/eslint#recommended-plugin-ruleset.

## 0.2.1

### Patch Changes

- [#6](https://github.com/brionmario/ui-configs/pull/6) [`967b522`](https://github.com/brionmario/ui-configs/commit/967b522141be43e558a0555c0b3a9672dfdcc118) Thanks [@brionmario](https://github.com/brionmario)! - `@brionmario` should be defined as a plugin in the `next` shareable ESLint config.

## 0.2.0

### Minor Changes

- [#1](https://github.com/brionmario/ui-configs/pull/1) [`fd76050`](https://github.com/brionmario/ui-configs/commit/fd7605085b4f6723f55526c49b88c4d0256c465e) Thanks [@brionmario](https://github.com/brionmario)! - add shareable ESLint config for Next.js

## 0.1.0

### Minor Changes

- initial release 🎉
