# Typed System

Typed System is a Toolkit to create your own Design System.

## Getting Started

TODO

## Packages

### All-in-one

[`@typed-system/typed-system`](https://github.com/typed-system/typed-system/tree/master/packages/typed-system)

---

### Core Packages

##### System

[`@typed-system/system`](https://github.com/typed-system/typed-system/tree/master/packages/system)

---

#### CSS

[`@typed-system/css`](https://github.com/typed-system/typed-system/tree/master/packages/css)

---

#### Variant

[`@typed-system/variant`](https://github.com/typed-system/typed-system/tree/master/packages/system)

| Function Name | Prop        | Theme Key     |
| ------------- | ----------- | ------------- |
| `textStyle`   | `textStyle` | `textStyles`  |
| `colorStyle`  | `colors`    | `colorStyles` |
| `buttonStyle` | `variant`   | `buttons`     |

---

### Theme Packages

#### Background

[`@typed-system/background`](https://github.com/typed-system/typed-system/tree/master/packages/background)

| Prop                  | CSS Property          | Theme Key   |
| --------------------- | --------------------- | ----------- |
| `$background`         | `background`          | none        |
| `$backgroundImage`    | `background-image`    | none        |
| `$backgroundSize`     | `background-size`     | none        |
| `$backgroundPosition` | `background-position` | none        |
| `$backgroundRepeat`   | `background-repeat`   | none        |

---

#### Border

[`@typed-system/border`](https://github.com/typed-system/typed-system/tree/master/packages/border)

| Prop                       | CSS Property                   | Theme Key      |
| -------------------------- | ------------------------------ | -------------- |
| `$border`                  | `border`                       | `borders`      |
| `$borderWidth`             | `border-width`                 | `borderWidths` |
| `$borderStyle`             | `border-style`                 | `borderStyles` |
| `$borderColor`             | `border-color`                 | `colors`       |
| `$borderRadius`            | `border-radius`                | `radii`        |
| `$borderTop`               | `border-top`                   | `borders`      |
| `$borderTopWidth`          | `border-top-width`             | `borderWidths` |
| `$borderTopStyle`          | `border-top-style`             | `borderStyles` |
| `$borderTopColor`          | `border-top-color`             | `colors`       |
| `$borderTopLeftRadius`     | `border-top-left-radius`       | `radii`        |
| `$borderTopRightRadius`    | `border-top-right-radius`      | `radii`        |
| `$borderRight`             | `border-right`                 | `borders`      |
| `$borderRightWidth`        | `border-right-width`           | `borderWidths` |
| `$borderRightStyle`        | `border-right-style`           | `borderStyles` |
| `$borderRightColor`        | `border-right-color`           | `colors`       |
| `$borderBottom`            | `border-bottom`                | `borders`      |
| `$borderBottomWidth`       | `border-bottom-width`          | `borderWidths` |
| `$borderBottomStyle`       | `border-bottom-style`          | `borderStyles` |
| `$borderBottomColor`       | `border-bottom-color`          | `colors`       |
| `$borderBottomLeftRadius`  | `border-bottom-left-radius`    | `radii`        |
| `$borderBottomRightRadius` | `border-bottom-right-radius`   | `radii`        |
| `$borderLeft`              | `border-left`                  | `borders`      |
| `$borderLeftWidth`         | `border-left-width`            | `borderWidths` |
| `$borderLeftStyle`         | `border-left-style`            | `borderStyles` |
| `$borderLeftColor`         | `border-left-color`            | `colors`       |
| `$borderX`, `$bx`          | `border-left`, `border-right`  | `borders`      |
| `$borderY`, `$by`          | `border-top`, `border-bottom`  | `borders`      |

---

#### Color

[`@typed-system/color`](https://github.com/typed-system/typed-system/tree/master/packages/color)

| Prop                      | CSS Property       | Theme Key   |
| ------------------------- | ------------------ | ----------- |
| `$color`                  | `color`            | `colors`    |
| `$bg`, `$backgroundColor` | `background-color` | `colors`    |
| `$opacity`                | `opacity`          | none        |

---

#### Flexbox

[`@typed-system/flexbox`](https://github.com/typed-system/typed-system/tree/master/packages/flexbox)

| Prop              | CSS Property       | Theme Key   |
| ----------------- | ------------------ | ----------- |
| `$alignItems`     | `align-items`      | none        |
| `$alignContent`   | `align-content`    | none        |
| `$justifyItems`   | `justify-items`    | none        |
| `$justifyContent` | `justify-content`  | none        |
| `$flexWrap`       | `flex-wrap`        | none        |
| `$flexDirection`  | `flex-direction`   | none        |
| `$flex`           | `flex` (shorthand) | none        |
| `$flexGrow`       | `flex-grow`        | none        |
| `$flexShrink`     | `flex-shrink`      | none        |
| `$flexBasis`      | `flex-basis`       | none        |
| `$justifySelf`    | `justify-self`     | none        |
| `$alignSelf`      | `align-self`       | none        |
| `$order`          | `order`            | none        |

---

#### Grid

[`@typed-system/grid`](https://github.com/typed-system/typed-system/tree/master/packages/grid)

| Prop                   | CSS Property            | Theme Key   |
| ---------------------- | ----------------------- | ----------- |
| `$gridGap`             | `grid-gap`              | `spacing`   |
| `$gridRowGap`          | `grid-row-gap`          | `spacing`   |
| `$gridColumnGap`       | `grid-column-gap`       | `spacing`   |
| `$gridColumn`          | `grid-column`           | none        |
| `$gridRow`             | `grid-row`              | none        |
| `$gridArea`            | `grid-area`             | none        |
| `$gridAutoFlow`        | `grid-auto-flow`        | none        |
| `$gridAutoRows`        | `grid-auto-rows`        | none        |
| `$gridAutoColumns`     | `grid-auto-columns`     | none        |
| `$gridTemplateRows`    | `grid-template-rows`    | none        |
| `$gridTemplateColumns` | `grid-template-columns` | none        |
| `$gridTemplateAreas`   | `grid-template-areas`   | none        |

---

#### Layout

[`@typed-system/layout`](https://github.com/typed-system/typed-system/tree/master/packages/layout)

| Prop             | CSS Property     | Theme Key   |
| ---------------- | ---------------- | ----------- |
| `$width`         | `width`          | `sizes`     |
| `$height`        | `height`         | `sizes`     |
| `$minWidth`      | `min-width`      | `sizes`     |
| `$maxWidth`      | `max-width`      | `sizes`     |
| `$minHeight`     | `min-height`     | `sizes`     |
| `$maxHeight`     | `max-height`     | `sizes`     |
| `$size`          | `width` `height` | `sizes`     |
| `$display`       | `display`        | none        |
| `$verticalAlign` | `vertical-align` | none        |
| `$overflow`      | `overflow`       | none        |
| `$overflowX`     | `overflowX`      | none        |
| `$overflowY`     | `overflowY`      | none        |

---

#### Position

[`@typed-system/position`](https://github.com/typed-system/typed-system/tree/master/packages/position)

| Prop        | CSS Property | Theme Key   |
| ----------- | ------------ | ----------- |
| `$position` | `position`   | none        |
| `$zIndex`   | `z-index`    | `zIndices`  |
| `$top`      | `top`        | `spacing`   |
| `$right`    | `right`      | `spacing`   |
| `$bottom`   | `bottom`     | `spacing`   |
| `$left`     | `left`       | `spacing`   |

---

#### Shadow

[`@typed-system/shadow`](https://github.com/typed-system/typed-system/tree/master/packages/shadow)

| Prop          | CSS Property  | Theme Key   |
| ------------- | ------------- | ----------- |
| `$textShadow` | `text-shadow` | `shadows`   |
| `$boxShadow`  | `box-shadow`  | `shadows`   |

---

#### Space

[`@typed-system/spacing`](https://github.com/typed-system/typed-system/tree/master/packages/spacing)

| Prop                    | CSS Property                       | Theme Key     |
| ----------------------- | ---------------------------------- | ------------- |
| `$m`, `$margin`         | `margin`                           | `spacing`     |
| `$mt`, `$marginTop`     | `margin-top`                       | `spacing`     |
| `$mr`, `$marginRight`   | `margin-right`                     | `spacing`     |
| `$mb`, `$marginBottom`  | `margin-bottom`                    | `spacing`     |
| `$ml`, `$marginLeft`    | `margin-left`                      | `spacing`     |
| `$mx`                   | `margin-left`, `margin-right`      | `spacing`     |
| `$my`                   | `margin-top`, `margin-bottom`      | `spacing`     |
| `$p`, `$padding`        | `padding`                          | `spacing`     |
| `$pt`, `$paddingTop`    | `padding-top`                      | `spacing`     |
| `$pr`, `$paddingRight`  | `padding-right`                    | `spacing`     |
| `$pb`, `$paddingBottom` | `padding-bottom`                   | `spacing`     |
| `$pl`, `$paddingLeft`   | `padding-left`                     | `spacing`     |
| `$px`                   | `padding-left`, `padding-right`    | `spacing`     |
| `$py`                   | `padding-top`, `padding-bottom`    | `spacing`     |

---

#### Typography

[`@typed-system/typography`](https://github.com/typed-system/typed-system/tree/master/packages/typography)

| Prop             | CSS Property     | Theme Key        |
| ---------------- | ---------------- | ---------------- |
| `$fontFamily`    | `font-family`    | `fonts`          |
| `$fontSize`      | `font-size`      | `fontSizes`      |
| `$fontWeight`    | `font-weight`    | `fontWeights`    |
| `$lineHeight`    | `line-height`    | `lineHeights`    |
| `$letterSpacing` | `letter-spacing` | `letterSpacings` |
| `$textAlign`     | `text-align`     | none             |
| `$fontStyle`     | `font-style`     | none             |

## API

TODO

## Philosophy

TODO
