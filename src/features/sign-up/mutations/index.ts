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

export const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $displayName: String!
    $password: String!
    $gender: Gender!
    $age: Int!
    $height: HeightCreateInput!
    $weight: WeightCreateInput!
    $weightGoal: WeightCreateInput!
  ) {
    createUser(
      data: {
        email: $email
        displayName: $displayName
        password: $password
        profile: {
          create: {
            gender: $gender
            age: $age
            height: { create: $height }
            weight: { create: $weight }
          }
        }
        goals: { create: { weight: { create: $weightGoal } } }
      }
    ) {
      id
    }
  }
`
