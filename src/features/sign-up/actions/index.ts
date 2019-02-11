import { SELECT_GENDER } from '../constants'

export interface SelectGender {
  type: SELECT_GENDER
  gender: 'male' | 'female' | null
}

export const selectGender = (gender: SelectGender['gender']): SelectGender => ({
  type: SELECT_GENDER,
  gender,
})
