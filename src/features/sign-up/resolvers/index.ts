import setGender from './setGender'
import clearFromSignUpUser from './clearFromSignUpUser'

const resolvers = {
  Mutation: {
    setGender,
    clearFromSignUpUser,
  },
}

export default resolvers
