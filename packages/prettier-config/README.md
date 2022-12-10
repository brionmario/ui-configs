# `@brionmario/prettier-config`

Shareable Prettier configurations used in Brion Mario's code bases.

## Installation

You'll first need to install [Prettier](https://prettier.io/):

### With npm

```sh
npm i prettier --save-dev
```

### With pnpm

```sh
pnpm add --save-dev prettier
```

### With Yarn

```sh
yard add --dev prettier
```

Next, install `@brionmario/prettier-config`:

### With npm

```sh
npm i @brionmario/prettier-config --save-dev
```

### With pnpm

```sh
pnpm add --save-dev @brionmario/prettier-config
```

### With Yarn

```sh
yard add --dev @brionmario/prettier-config
```

## Usage

You can extend the `@brionmario/prettier-config` in your preferred configuration file flavor.

```js
// prettier.config.cjs

module.exports = require('@brionmario/prettier-config')
```

For more extending strategies, read the [official guide](https://prettier.io/docs/en/configuration.html#sharing-configurations).
