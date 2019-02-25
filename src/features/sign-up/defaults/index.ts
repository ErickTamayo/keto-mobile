import { NEW_USER_TYPENAME, HEIGHT_TYPENAME, WEIGHT_TYPENAME } from '../constants'

// const newUser = {
//   id: '0',
//   displayName: '',
//   email: '',
//   password: '',
//   gender: null,
//   age: null,
//   height: {
//     unit: 'IMPERIAL',
//     feet: null,
//     inches: null,
//     centimeters: null,
//     __typename: HEIGHT_TYPENAME,
//   },
//   weight: {
//     unit: 'IMPERIAL',
//     pounds: null,
//     kilograms: null,
//     __typename: WEIGHT_TYPENAME,
//   },
//   weightGoal: {
//     unit: 'IMPERIAL',
//     pounds: null,
//     kilograms: null,
//     __typename: WEIGHT_TYPENAME,
//   },
//   __typename: NEW_USER_TYPENAME,
// }

const newUser = {
  id: '0',
  displayName: 'Erick',
  email: 'ericktamayo@gmail.com',
  password: 'pomelo',
  gender: 'MALE',
  age: 30,
  height: {
    unit: 'IMPERIAL',
    feet: 1,
    inches: 1,
    centimeters: 1,
    __typename: HEIGHT_TYPENAME,
  },
  weight: {
    unit: 'IMPERIAL',
    pounds: 1,
    kilograms: 1,
    __typename: WEIGHT_TYPENAME,
  },
  weightGoal: {
    unit: 'IMPERIAL',
    pounds: 1,
    kilograms: 1,
    __typename: WEIGHT_TYPENAME,
  },
  __typename: NEW_USER_TYPENAME,
}

const defaults = {
  newUser,
}

export default defaults
