# @dbenfouzari/eslint-plugin-react-native

## Installation

```shell
yarn add -D @dbenfouzari/eslint-plugin-react-native
```

or if you are using npm

```shell
npm i -D @dbenfouzari/eslint-plugin-react-native
```

Enable it by inserting in your project

```json
{
  "plugins": ["@dbenfouzari/react-native"]
}
```

## Available rules

### `@dbenfouzari/react-native/no-child-string`

This rule will avoid you using text as children.
Useful when you want to enforce `i18n`.

Example :

```json
{
  "plugins": ["@dbenfouzari/react-native"],
  "rules": {
    "@dbenfouzari/react-native/no-child-string": ["error"]
  }
}
```
