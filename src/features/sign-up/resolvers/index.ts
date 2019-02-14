import setGender from './setGender'
import setOtherParametersToSignUpUser from './setOtherParametersToSignUpUser'

const resolvers = {
  Mutation: {
    setGender,
    setOtherParametersToSignUpUser,
  },
}

export default resolvers
