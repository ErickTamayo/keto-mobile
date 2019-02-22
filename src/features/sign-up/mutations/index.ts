import gql from 'graphql-tag'

export const UPDATE_NEW_USER = gql`
  mutation updateNewUser(
    $displayName: String!
    $email: String!
    $password: String!
    $gender: Gender!
    $age: String!
    $height: Height!
    $weight: Weight!
    $weightGoal: Weight!
  ) {
    updateNewUser(
      displayName: $displayName
      email: $email
      password: $password
      gender: $gender
      age: $age
      height: $height
      weight: $weight
      weightGoal: $weightGoal
    ) @client
  }
`

export const CREATE_ACCOUNT = gql`
  mutation createAccount($email: String!, $displayName: String!, $password: String!) {
    createUser(email: $email)
  }
`
