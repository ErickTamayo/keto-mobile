import gql from 'graphql-tag'
import { SIGN_UP_USER_TYPENAME } from '../constants'

const resolvers = {
  Mutation: {
    setGender: (_, { gender }, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: SIGN_UP_USER_TYPENAME, id: '0' })

      const fragment = gql`
        fragment selectGender on SignUpUser {
          gender
        }
      `

      cache.writeFragment({ id, fragment, data: { gender, __typename: SIGN_UP_USER_TYPENAME } })
      return null
    },
  },
}

export default resolvers
