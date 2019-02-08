export const sequence = (multiplier: number, times: number): number[] => {
  let array: number[] = []
  let counter = times

  while (counter) {
    counter -= 1
    array = [counter * multiplier, ...array]
  }

  return array
}

export const empty = (): void => {}
