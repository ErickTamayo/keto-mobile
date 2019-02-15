export const ageToString = (age: number | null): string => (age ? `${age} years` : '')

export const weightToString = (weight: Weight): string =>
  weight.lbs ? (weight.unit === 'imperial' ? `${weight.lbs} lbs` : `${weight.kg} kg`) : ''

export const heightToString = (height: Height): string =>
  height.in ? (height.unit === 'imperial' ? `${height.ft} ' ${height.in}"` : `${height.cm} cm`) : ''

export const removedUndefinedProps = (object: { [key: string]: any }) => {
  let copy: { [key: string]: any } = {}
  for (let key in object) if (object[key] !== undefined) copy[key] = object[key]
  return copy
}

//TODO clear dupes of this
export const sequence = (multiplier: number, times: number, offset: number = 0): number[] => {
  let array: number[] = []
  let counter = times

  while (counter - offset) {
    counter -= 1
    array = [counter * multiplier, ...array]
  }

  return array
}
