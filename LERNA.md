## How-to: Linking packages between each other

From repository root run:

```sh
yarn lerna add [PACKAGE_NAME]
```

lerna will then symlink the packages and add it as a dependency to `package.json`.

> Note that you can only symlink [one package at a time](https://github.com/lerna/lerna/tree/master/commands/add#usage).

## Examples

Add `react-dom` as a dependency to `@typed-system/background` package:

```sh
yarn lerna add --scope=@typed-system/background react-dom
```

Add `csstype` as a devDependency to all packages

```sh
yarn lerna add --dev csstype
```
