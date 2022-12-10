# `@brionmario/eslint-plugin`

ESLint plugin containing configurations & custom rules used in Brion Mario's code bases.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

### With npm

```sh
npm i eslint --save-dev
```

### With pnpm

```sh
pnpm add --save-dev eslint
```

### With Yarn

```sh
yard add --dev eslint
```

Next, install `@brionmario/eslint-plugin`:

### With npm

```sh
npm i @brionmario/eslint-plugin --save-dev
```

### With pnpm

```sh
pnpm add --save-dev @brionmario/eslint-plugin
```

### With Yarn

```sh
yard add --dev @brionmario/eslint-plugin
```

## Usage

### For JavaScript projects

If you're working on any `es5` or `es6` projects, do the following extension in your `eslint` config.

```json
{
  "extends": "plugin:@brionmario/javascript"
}
```

### For TypeScript projects

If you're working on a TypeScript based project, do the following extension in your `eslint` config.

```json
{
  "extends": "plugin:@brionmario/typescript"
}
```

#### Stricter Rules

If you want to enforce more stricter rules like mandating types for variables, mandating return types etc, do the following extension in your `eslint` config.

```diff
{
  "extends": [
    "plugin:@brionmario/typescript"
+   "plugin:@brionmario/strict"
  ]
}
```

### For React projects

If you're working on a React project, do the following extension in your `eslint` config.

#### React JavaScript

```json
{
  "extends": [
    "plugin:@brionmario/javascript"
    "plugin:@brionmario/react",
  ]
}
```

#### React TypeScript

```json
{
  "extends": [
    "plugin:@brionmario/typescript"
    "plugin:@brionmario/react",
  ]
}
```

#### Jest & React Testing Library.

If you're working on project that uses [`Jest`](https://jestjs.io/) & [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/) for unit testing, do the following extension in your `eslint` config.

```diff
{
  "extends": [
    ...,
+   "plugin:@brionmario/jest",
  ]
}
```

### Prettier

If you want to integrate the [`prettier`](https://github.com/prettier/prettier-eslint) ESLint in to your project, do the following extension in your `eslint` config.

```diff
{
  "extends": [
    ...,
+   "plugin:@brionmario/prettier",
  ]
}
```

### For Brion's Projects

For Brion's own projects, the following extension is used  to enforce specific standards such as file license headers, etc.

```diff
{
  "extends": [
    ...,
+   "plugin:@brionmario/internal",
  ]
}
```
