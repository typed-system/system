interface Sizes extends ReadonlyArray<number> {
  none?: 0
  small?: 4
}

const arr = [0, 4, 8, 16, 32, 64] as const
const space: Sizes = arr
space.none = arr[0]
space.small = arr[1]

export default space
