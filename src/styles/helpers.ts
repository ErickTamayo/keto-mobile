export const sequence = (multiplier: number, times: number, offset: number = 0): number[] => {
  let array: number[] = []
  let counter = times

  while (counter - offset) {
    counter -= 1
    array = [counter * multiplier, ...array]
  }

  return array
}

export const empty = (): void => {}
