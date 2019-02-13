import gql from 'graphql-tag'

export const GET_SIGN_UP_USER_GENDER = gql`
  {
    signUpUser @client {
      gender
    }
  }
`
