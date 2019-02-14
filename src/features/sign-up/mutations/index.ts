import gql from 'graphql-tag'

export const SET_SIGN_UP_USER_GENDER = gql`
  mutation SetGender($gender: String!) {
    setGender(gender: $gender) @client
  }
`

export const CLEAR_FROM_SIGN_UP_USER = gql`
  mutation ClearFromSignUpUser($field: String!) {
    clearFromSignUpUser(field: $field) @client
  }
`
