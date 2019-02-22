export const ageToString = (age: number | null): string => (age ? `${age} years` : '')

export const weightToString = (weight: Weight): string =>
  weight.pounds
    ? weight.unit === 'IMPERIAL'
      ? `${weight.pounds} lbs`
      : `${weight.kilograms} kg`
    : ''

export const heightToString = (height: Height): string =>
  height.inches
    ? height.unit === 'IMPERIAL'
      ? `${height.feet}' ${height.inches}"`
      : `${height.centimeters} cm`
    : ''

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
