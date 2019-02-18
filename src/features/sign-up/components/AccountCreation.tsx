import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Keyboard } from 'react-native'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import Input from '../../../components/input/Input'
import st from '../../../styles'

export default class AccountCreation extends Component {
  private createAccount = () => {
    Keyboard.dismiss()
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}
        behavior="padding"
      >
        <CardWithHeaderAndButton
          title="Create your account"
          description="This way we can save your progress"
          buttonText="Create Account"
          onButtonPress={this.createAccount}
          // disabled={allDisplays === null}
        >
          <View>
            <Input
              icon="tag"
              placeholder="Display Name"
              name="displayName"
              value={''}
              onBlur={e => console.log({ text: e.nativeEvent.text })}
            />
            <Input
              icon="envelope"
              placeholder="Email"
              name="email"
              value={''}
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={e => console.log({ text: e.nativeEvent.text })}
            />
            <Input
              icon="lock"
              placeholder="Password"
              name="password"
              secureTextEntry={true}
              value={''}
              autoCapitalize="none"
              onBlur={e => console.log({ text: e.nativeEvent.text })}
            />
          </View>
        </CardWithHeaderAndButton>
      </KeyboardAvoidingView>
    )
  }
}