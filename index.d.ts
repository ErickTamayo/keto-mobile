/**
 * Subtract keys from one interface from the other.
 *
 * @example
 * interface One { one: string }
 * interface Three { one: string, two: string }
 *
 * type Two = Omit<Three, keyof One>;
 *
 * // The type of Two will be
 * interface Two { two: string }
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * Remove from T the keys that are in common with K
 */
type Optionalize<T extends K, K> = Omit<T, keyof K>

// App Types
type Height = {
  unit: 'imperial' | 'metric'
  ft: number | null
  in: number | null
  cm: number | null
}

type Weight = {
  unit: 'imperial' | 'metric'
  lbs: number | null
  kg: number | null
}
