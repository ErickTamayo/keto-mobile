import React, { Component, JSXElementConstructor } from 'react'
import { Mutation } from 'react-apollo'
import { CLEAR_FROM_SIGN_UP_USER } from '../mutations'

export interface WithOtherParametersClearMutationProps {
  clearFromSignUpUser: (...args: any[]) => any
}

const withOtherParametersClearMutation = <T, WithOtherParametersClearMutationProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithOtherParametersClearMutationProps>> {
    render() {
      return (
        <Mutation mutation={CLEAR_FROM_SIGN_UP_USER}>
          {clearFromSignUpUser => (
            <WrappedComponent clearFromSignUpUser={clearFromSignUpUser} {...this.props as T} />
          )}
        </Mutation>
      )
    }
  }
}

export default withOtherParametersClearMutation
