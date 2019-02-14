import React, { Component, JSXElementConstructor } from 'react'
import { Query } from 'react-apollo'
import { GET_SIGN_UP_USER_GENDER } from '../queries'

export interface WithGenderSelectionQueryProps {
  gender: string | null
}

const withGenderSelectionQuery = <T, WithGenderSelectionQueryProps extends keyof T>(
  WrappedComponent: JSXElementConstructor<T>
) => {
  return class extends Component<Omit<T, WithGenderSelectionQueryProps>> {
    render() {
      return (
        <Query query={GET_SIGN_UP_USER_GENDER}>
          {({ data, loading }) => {
            if (loading) return null

            const {
              signUpUser: { gender },
            } = data

            return <WrappedComponent gender={gender} {...this.props as T} />
          }}
        </Query>
      )
    }
  }
}

export default withGenderSelectionQuery
