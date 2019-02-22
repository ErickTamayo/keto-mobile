import { NEW_USER_TYPENAME, HEIGHT_TYPENAME, WEIGHT_TYPENAME } from '../constants'

const newUser = {
  id: '0',
  displayName: null,
  email: null,
  password: null,
  gender: null,
  age: null,
  height: {
    unit: 'imperial',
    feet: null,
    inches: null,
    centimeters: null,
    __typename: HEIGHT_TYPENAME,
  },
  weight: {
    unit: 'imperial',
    pounds: null,
    kilograms: null,
    __typename: WEIGHT_TYPENAME,
  },
  weightGoal: {
    unit: 'imperial',
    pounds: null,
    kilograms: null,
    __typename: WEIGHT_TYPENAME,
  },
  __typename: NEW_USER_TYPENAME,
}

const defaults = {
  newUser,
}

export default defaults
