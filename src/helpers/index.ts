export const weightToString = (weight: Weight): string =>
  weight.lbs ? (weight.unit === 'imperial' ? `${weight.lbs} lbs` : `${weight.kg} kg`) : ''

export const heightToString = (height: Height): string =>
  height.cm ? (height.unit === 'imperial' ? `${height.ft} ' ${height.in}"` : `${height.cm} cm`) : ''

export const removedUndefinedProps = (object: { [key: string]: any }) => {
  let copy: { [key: string]: any } = {}
  for (let key in object) if (object[key] !== undefined) copy[key] = object[key]
  return copy
}
