import gql from 'graphql-tag'

export const SET_SIGN_UP_USER_GENDER = gql`
  mutation SetGender($gender: String!) {
    setGender(gender: $gender) @client
  }
`
