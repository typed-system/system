## How-to: Linking packages between each other

`cd` into the package that you want to add a dependency to, then run:

```sh
yarn lerna add [PACKAGE_NAME]
```

lerna will then symlink the packages and add it as a dependency to `package.json`.

> Note that you can only symlink [one package at a time](https://github.com/lerna/lerna/tree/master/commands/add#usage).
