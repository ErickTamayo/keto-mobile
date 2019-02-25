import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Keyboard, Text } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import validate from 'validate.js'
import isEqual from 'lodash.isequal'
import { ApolloError } from 'apollo-boost'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import Input from '../../../components/input/Input'
import st from '../../../styles'
import constraints from '../../../validation'
import withNewUserQuery, { WithNewUserQueryProps } from '../hocs/withNewUserQuery'
import withCreateUserMutation, { WithCreateUserMutationProps } from '../hocs/withCreateUserMutation'
import withUpdateNewUserMutation, {
  WithUpdateNewUserMutationProps,
} from '../hocs/withUpdateNewUserMutation'

export interface Props
  extends NavigationInjectedProps,
    WithNewUserQueryProps,
    WithCreateUserMutationProps,
    WithUpdateNewUserMutationProps {}

export interface State {
  validation?: { [key: string]: string[] }
  serverValidation?: { [key: string]: string[] }
  touched: { [key: string]: boolean }
}

class AccountCreation extends Component<Props, State> {
  state: State = {
    validation: undefined,
    serverValidation: undefined,
    touched: {
      displayName: false,
      email: false,
      password: false,
    },
  }

  componentDidMount() {
    const { setCreateUserHandlers } = this.props
    setCreateUserHandlers(this.handleCreateUserError, this.handleCreateUserCompleted)
  }

  componentDidUpdate(prevProps: Props) {
    if (!isEqual(prevProps.newUser, this.props.newUser)) {
      this.validate()
    }
  }

  public handleCreateUserError = (error: ApolloError) => {
    let serverValidation = undefined

    if (error.networkError) {
      if (error.networkError.statusCode === 502) {
        serverValidation = { network: ['Oops! Please try again'] }
      }
    }

    // we only have the email constraint
    if (error.graphQLErrors.length > 0) {
      serverValidation = { email: ['Email is already in use'] }
    }

    this.setState({ serverValidation })
  }

  private clearServerValidation = (key: string) => {
    const { serverValidation } = this.state
    serverValidation && delete serverValidation[key]
    this.setState({ serverValidation })
  }

  public handleCreateUserCompleted = () => {
    this.navigateToSettingsScreen()
  }

  private navigateToSettingsScreen = () => {
    const { navigation } = this.props
    navigation.navigate('Settings')
  }

  private createUser = () => {
    const { newUser, createUser } = this.props
    Keyboard.dismiss()
    createUser(newUser)
  }

  private validate = (): validate.ValidateOption | undefined => {
    const {
      newUser: { email, displayName, password },
    } = this.props

    const validation = validate(
      { displayName, email, password },
      {
        displayName: constraints.displayName,
        email: constraints.email,
        password: constraints.password,
      }
    )

    this.setState({ validation })

    return validation
  }

  private getValidationErrors = (): string[] => {
    const { validation, serverValidation } = this.state

    const serverErrors = serverValidation
      ? Object.keys(serverValidation).reduce<string[]>((accumulator, key) => {
          return [...accumulator, ...serverValidation![key]]
        }, [])
      : []

    const clientErrors = validation
      ? Object.keys(validation).reduce<string[]>((accumulator, key) => {
          return this.isTouched(key) ? [...accumulator, ...validation![key]] : accumulator
        }, [])
      : []

    return [...serverErrors, ...clientErrors]
  }

  private touchInput = (input: string) => {
    this.setState(state => ({
      touched: {
        ...state.touched,
        [input]: true,
      },
    }))
  }

  private isTouched = (input: string | string[]): boolean => {
    const { touched } = this.state

    return Array.isArray(input)
      ? input.reduce((previousValue, currentValue) => {
          return previousValue && touched[currentValue]
        }, true)
      : touched[input]
  }

  render() {
    const {
      newUser: { displayName, email, password },
      createUserResult: { loading },
      updateNewUser,
    } = this.props

    const { serverValidation } = this.state

    const firstError = this.getValidationErrors().shift()
    const buttonShouldBeDisabled =
      (firstError !== undefined && serverValidation && !serverValidation['network']) ||
      !this.isTouched(['displayName', 'email', 'password']) ||
      loading

    return (
      <KeyboardAvoidingView
        style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}
        behavior="padding"
      >
        <CardWithHeaderAndButton
          title="Create your account"
          description="This way we can save your progress"
          buttonText={loading ? 'Creating...' : 'Create Account'}
          onButtonPress={this.createUser}
          disabled={buttonShouldBeDisabled}
        >
          <View>
            <Input
              icon="tag"
              placeholder="Display Name"
              value={displayName ? displayName : ''}
              onChangeText={displayName => updateNewUser({ displayName } as NewUser)}
              onBlur={() => {
                this.touchInput('displayName')
                this.validate()
              }}
            />
            <Input
              icon="envelope"
              placeholder="Email"
              value={email ? email : ''}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={email => {
                updateNewUser({ email } as NewUser)
                this.clearServerValidation('email')
              }}
              onBlur={() => {
                this.touchInput('email')
                this.validate()
              }}
            />
            <Input
              icon="lock"
              placeholder="Password"
              secureTextEntry={true}
              value={password ? password : ''}
              autoCapitalize="none"
              onChangeText={password => updateNewUser({ password } as NewUser)}
              onBlur={() => {
                this.touchInput('password')
                this.validate()
              }}
            />
          </View>
          <View style={[st.m.b1]}>
            <Text style={[st.font.medium, st.text.sm, st.text.red, st.text.center]}>
              {firstError ? firstError : ' '}
            </Text>
          </View>
        </CardWithHeaderAndButton>
      </KeyboardAvoidingView>
    )
  }
}

export default withNewUserQuery(withUpdateNewUserMutation(withCreateUserMutation(AccountCreation)))
