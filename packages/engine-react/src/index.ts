import * as React from "react"
// import * as CSS from "csstype";

export const css = (a?: any, b?: any) => ({})

type StyleCallback<P> = (props: P) => any | P

// function styled<P extends {}>(el: React.ReactElement) {
//   return (props: P) {
//     return any
//   }
// }
// export function styled<P extends {}>(el: React.ReactElement): (props: Callback<P>) => P
// export function styled<P extends {}>(el: React.ReactElement): (props: P) => P
export function styled<T extends {}>(
  Comp: any = "button",
  styleFnOrStyleObject: StyleCallback<T>,
) {
  return (props: T) => {
    let mergedProps: any = props
    if (typeof styleFnOrStyleObject === "function") {
      mergedProps = css(props, styleFnOrStyleObject(props))
    } else {
      mergedProps = css(props, styleFnOrStyleObject)
    }
    return React.createElement(Comp, mergedProps)
  }
}
