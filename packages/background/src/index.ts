import * as CSS from "csstype"
import { ResponsiveValue, TLengthTypedSystem } from "@typed-system/css"

type ResponsiveBackgroundValue<TLength> = ResponsiveValue<
  CSS.BackgroundProperty<TLength>
>
type ResponsiveBackgroundImageValue = ResponsiveValue<
  CSS.BackgroundImageProperty
>
type ResponsiveBackgroundPositionValue<TLength> = ResponsiveValue<
  CSS.BackgroundPositionProperty<TLength>
>
type ResponsiveBackgroundRepeatValue = ResponsiveValue<
  CSS.BackgroundRepeatProperty
>
type ResponsiveBackgroundSizeValue<TLength> = ResponsiveValue<
  CSS.BackgroundSizeProperty<TLength>
>

export interface BackgroundProperty<TLength> {
  $background?: ResponsiveBackgroundValue<TLength>
}

export interface BackgroundImageProperty {
  $backgroundImage?: ResponsiveBackgroundImageValue
}

export interface BackgroundPositionProperty<TLength> {
  $backgroundPosition?: ResponsiveBackgroundPositionValue<TLength>
}

export interface BackgroundRepeatProperty {
  $backgroundRepeat?: ResponsiveBackgroundRepeatValue
}

export interface BackgroundSizeProperty<TLength> {
  $backgroundSize?: ResponsiveBackgroundSizeValue<TLength>
}

export interface BackgroundProps<TLength = TLengthTypedSystem>
  extends BackgroundProperty<TLength>,
    BackgroundImageProperty,
    BackgroundPositionProperty<TLength>,
    BackgroundSizeProperty<TLength>,
    BackgroundRepeatProperty {}

// const config = {}

export default {}
