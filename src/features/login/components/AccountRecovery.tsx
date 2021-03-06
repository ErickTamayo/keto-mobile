import React, { Component } from 'react'
import { View, Text, KeyboardAvoidingView, Keyboard, TouchableOpacity } from 'react-native'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import Input from '../../../components/input/Input'
import st from '../../../styles'

export default class AccountRecovery extends Component {
  private createAccount = () => {
    Keyboard.dismiss()
  }

  private navigateToAccountRecovery = () => {}

  private renderFooter = () => {
    return (
      <TouchableOpacity
        onPress={this.navigateToAccountRecovery}
        style={[st.m.t2, st.height.h4, st.justify.center]}
      >
        <Text style={[st.text.center, st.text.grey2, st.font.medium, st.text.sm]}>
          Forgot your password?
        </Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}
        behavior="padding"
      >
        <CardWithHeaderAndButton
          title="Recover your account"
          description="Please enter your email to send you a verification code"
          buttonText="Send Verification"
          onButtonPress={this.createAccount}
          // disabled={allDisplays === null}
        >
          <View>
            <Input
              icon="envelope"
              placeholder="Email"
              name="email"
              value={''}
              keyboardType="email-address"
              autoCapitalize="none"
              onBlur={e => console.log({ text: e.nativeEvent.text })}
            />
          </View>
        </CardWithHeaderAndButton>
      </KeyboardAvoidingView>
    )
  }
}
