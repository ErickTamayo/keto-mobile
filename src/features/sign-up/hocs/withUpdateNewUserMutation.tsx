import React, { Component, JSXElementConstructor } from 'react'
import { Mutation } from 'react-apollo'
import { UPDATE_NEW_USER } from '../mutations'

export interface WithUpdateNewUserMutationProps {
  updateNewUser: (user: NewUser) => any
}

const withUpdateNewUserMutation = <T, WithUpdateNewUserMutation extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithUpdateNewUserMutation>> {
    render() {
      return (
        <Mutation mutation={UPDATE_NEW_USER}>
          {updateNewUser => (
            <WrappedComponent
              updateNewUser={(newUser: NewUser) => updateNewUser({ variables: newUser })}
              {...this.props as T}
            />
          )}
        </Mutation>
      )
    }
  }
}

export default withUpdateNewUserMutation
