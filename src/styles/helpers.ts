export const sequence = (multiplier: number, times: number): number[] => {
  let array: number[] = []

  while (times--) {
    array = [times * multiplier, ...array]
  }

  return array
}
