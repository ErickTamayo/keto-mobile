import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Keyboard } from 'react-native'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import Input from '../../../components/input/Input'
import st from '../../../styles'
import withNewUserQuery, { WithNewUserQueryProps } from '../hocs/withNewUserQuery'
import withCreateUserMutation, { WithCreateUserMutationProps } from '../hocs/withCreateUserMutation'
import withUpdateNewUserMutation, {
  WithUpdateNewUserMutationProps,
} from '../hocs/withUpdateNewUserMutation'

export interface Props
  extends WithNewUserQueryProps,
    WithCreateUserMutationProps,
    WithUpdateNewUserMutationProps {}

class AccountCreation extends Component<Props, {}> {
  private createUser = () => {
    const {
      newUser: { gender, age, height, weight, weightGoal },
      createUser,
    } = this.props

    createUser({ gender, age, height, weight, weightGoal })
    Keyboard.dismiss()
  }

  render() {
    const {
      newUser: { displayName, email, password },
      updateNewUser,
    } = this.props

    return (
      <KeyboardAvoidingView
        style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}
        behavior="padding"
      >
        <CardWithHeaderAndButton
          title="Create your account"
          description="This way we can save your progress"
          buttonText="Create Account"
          onButtonPress={this.createUser}
          // disabled={allDisplays === null}
        >
          <View>
            <Input
              icon="tag"
              placeholder="Display Name"
              name="displayName"
              value={displayName ? displayName : ''}
              onChangeText={displayName => updateNewUser({ displayName } as NewUser)}
            />
            <Input
              icon="envelope"
              placeholder="Email"
              name="email"
              value={email ? email : ''}
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={email => updateNewUser({ email } as NewUser)}
            />
            <Input
              icon="lock"
              placeholder="Password"
              name="password"
              secureTextEntry={true}
              value={password ? password : ''}
              autoCapitalize="none"
              onChangeText={password => updateNewUser({ password } as NewUser)}
            />
          </View>
        </CardWithHeaderAndButton>
      </KeyboardAvoidingView>
    )
  }
}

export default withNewUserQuery(withCreateUserMutation(withUpdateNewUserMutation(AccountCreation)))
