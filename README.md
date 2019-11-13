<div align="center">
  <a href="https://github.com/typed-system/typed-system/">
    <img alt="Typed System Logo" width="400" src="./website/assets/images/logo-typed-system.svg"/>
  </a>
  <p>Typed System is a Toolkit to create your own Design System.<p>
</div>

## Getting Started

TODO

## Packages

### Core

| Package | Version | Docs | Description |
| --- | --- | --- | --- |
| [`@typed-system/typed-system`](https://github.com/typed-system/typed-system/tree/master/packages/typed-system) | [![npm](https://img.shields.io/npm/v/s@typed-system/typed-system.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/typed-system) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/typed-system) | All-in-one Package (Re-Exports all Module Packages in one big file) |
| [`@typed-system/react-engine`](https://github.com/typed-system/typed-system/tree/master/packages/react-engine) | [![npm](https://img.shields.io/npm/v/s@typed-system/react-engine.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/react-engine) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/react-engine) | React-Engine |
| [`@typed-system/css`](https://github.com/typed-system/typed-system/tree/master/packages/css) | [![npm](https://img.shields.io/npm/v/s@typed-system/css.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/css) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/css) | CSS |

### Modules

| Package | Version | Docs | Description |
| --- | --- | --- | --- |
| [`@typed-system/background`](https://github.com/typed-system/typed-system/tree/master/packages/background) | [![npm](https://img.shields.io/npm/v/s@typed-system/background.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/background) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/background) | Background |
| [`@typed-system/border`](https://github.com/typed-system/typed-system/tree/master/packages/border) | [![npm](https://img.shields.io/npm/v/s@typed-system/border.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/border) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/border) | Border |
| [`@typed-system/color`](https://github.com/typed-system/typed-system/tree/master/packages/color) | [![npm](https://img.shields.io/npm/v/s@typed-system/color.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/color) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/color) | Color |
| [`@typed-system/flexbox`](https://github.com/typed-system/typed-system/tree/master/packages/flexbox) | [![npm](https://img.shields.io/npm/v/s@typed-system/flexbox.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/flexbox) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/flexbox) | Flexbox |
| [`@typed-system/grid`](https://github.com/typed-system/typed-system/tree/master/packages/grid) | [![npm](https://img.shields.io/npm/v/s@typed-system/grid.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/grid) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/grid) | Grid |
| [`@typed-system/layout`](https://github.com/typed-system/typed-system/tree/master/packages/layout) | [![npm](https://img.shields.io/npm/v/s@typed-system/layout.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/layout) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/layout) | Layout |
| [`@typed-system/position`](https://github.com/typed-system/typed-system/tree/master/packages/position) | [![npm](https://img.shields.io/npm/v/s@typed-system/position.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/position) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/position) | Position |
| [`@typed-system/shadow`](https://github.com/typed-system/typed-system/tree/master/packages/shadow) | [![npm](https://img.shields.io/npm/v/s@typed-system/shadow.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/shadow) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/shadow) | Shadow |
| [`@typed-system/spacing`](https://github.com/typed-system/typed-system/tree/master/packages/spacing) | [![npm](https://img.shields.io/npm/v/s@typed-system/spacing.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/spacing) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/spacing) | Spacing |
| [`@typed-system/typography`](https://github.com/typed-system/typed-system/tree/master/packages/typography) | [![npm](https://img.shields.io/npm/v/s@typed-system/typography.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/typography) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/typography) | Typography |
| [`@typed-system/variant`](https://github.com/typed-system/typed-system/tree/master/packages/variant) | [![npm](https://img.shields.io/npm/v/s@typed-system/variant.svg?style=flat-square)](https://www.npmjs.com/package/@typed-system/variant) | [Link](https://github.com/typed-system/typed-system/tree/master/packages/variant) | Variant |

## API

TODO

## Philosophy

TODO

## Workflow

Build all packages:

```shell
yarn lerna run build
```

Build one package:

```shell
yarn lerna run --scope package-name build
```

e.g. the following will only build the `@typed-system/css` package:

```shell
yarn lerna run --scope @typed-system/css build
```

See [`filter-options`](https://github.com/lerna/lerna/tree/master/core/filter-options) for more options.
