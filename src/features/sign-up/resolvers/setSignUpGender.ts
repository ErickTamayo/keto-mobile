import gql from 'graphql-tag'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { SIGN_UP_USER_TYPENAME } from '../constants'

const setSignUpUserGender = (
  _: any,
  { gender }: { gender: string },
  { cache, getCacheKey }: { cache: InMemoryCache; getCacheKey: (...args: any[]) => string }
) => {
  const id = getCacheKey({ __typename: SIGN_UP_USER_TYPENAME, id: '0' })

  const fragment = gql`
    fragment selectGender on SignUpUser {
      gender
    }
  `

  cache.writeFragment({ id, fragment, data: { gender, __typename: SIGN_UP_USER_TYPENAME } })
  return null
}

export default setSignUpUserGender
