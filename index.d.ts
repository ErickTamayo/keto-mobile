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
  unit: Unit
  feet: number | null
  inches: number | null
  centimeters: number | null
}

type Weight = {
  unit: Unit
  pounds: number | null
  kilograms: number | null
}

type Unit = 'IMPERIAL' | 'METRIC'

type Gender = 'MALE' | 'FEMALE'

type NewUser = {
  displayName?: string | null
  email?: string | null
  password?: string | null
  gender?: Gender | null
  age?: number | null
  height?: Height | null
  weight?: Weight | null
  weightGoal?: Weight | null
}
