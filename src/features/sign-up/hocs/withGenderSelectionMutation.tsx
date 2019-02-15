import React, { Component, JSXElementConstructor } from 'react'
import { Mutation } from 'react-apollo'
import { SET_SIGN_UP_USER_GENDER } from '../mutations'

export interface WithGenderSelectionMutationProps {
  setSignUpUserGender: (...args: any[]) => any
}

const withGenderSelectionMutation = <T, WithGenderSelectionMutationProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithGenderSelectionMutationProps>> {
    render() {
      return (
        <Mutation mutation={SET_SIGN_UP_USER_GENDER}>
          {setSignUpUserGender => (
            <WrappedComponent setSignUpUserGender={setSignUpUserGender} {...this.props as T} />
          )}
        </Mutation>
      )
    }
  }
}

export default withGenderSelectionMutation
