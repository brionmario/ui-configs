# `@brionmario/stylelint-config`

Shareable Stylelint configurations used in Brion Mario's code bases.

## Installation

You'll first need to install [Stylelint](https://stylelint.io/):

### With npm

```sh
npm i stylelint --save-dev
```

### With pnpm

```sh
pnpm add --save-dev stylelint
```

### With Yarn

```sh
yard add --dev stylelint
```

Next, install `@brionmario/stylelint-config`:

### With npm

```sh
npm i @brionmario/stylelint-config --save-dev
```

### With pnpm

```sh
pnpm add --save-dev @brionmario/stylelint-config
```

### With Yarn

```sh
yard add --dev @brionmario/stylelint-config
```

## Usage

You can extend the `@brionmario/stylelint-config` in your preferred configuration file flavor.

```js
// stylelint.config.cjs

module.exports = {
  extends: ['@brionmario/stylelint-config'],
  ignoreFiles: ['**/*.js', '**/*.cjs'],
};
```

For more extending strategies, read the [official guide](https://stylelint.io/user-guide/configure).
