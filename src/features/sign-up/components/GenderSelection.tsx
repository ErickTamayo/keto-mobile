import * as React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { StateProps, DispatchProps } from '../containers/GenderSelection'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import RadioButton from '../../../components/radio-button/RadioButton'

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}

export default class GenderSelection extends React.Component<Props, object> {
  private navigateToOtherParameters = () => {
    const { navigation } = this.props
    navigation.navigate('OtherParameters')
  }

  private onRadioButtonPressed = (value: string): void => {
    const { selectGender } = this.props
    selectGender(value as 'male' | 'female')
  }

  // private navigateToLogIn = () => this.props.navigation.navigate('Login')

  public render(): JSX.Element {
    const { gender } = this.props
    const disabled = false
    return (
      <View style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}>
        <CardWithHeaderAndButton
          title="What's your gender?"
          description="We will make sure you get better and personalized results"
          buttonText="Continue"
          onButtonPress={this.navigateToOtherParameters}
          disabled={gender === null}
        >
          <View style={[st.flex.row]}>
            <RadioButton
              style={[st.m.a4]}
              variant="lg"
              checked={gender === 'female'}
              onPress={this.onRadioButtonPressed}
              title="FEMALE"
              value="female"
            />
            <RadioButton
              style={[st.m.a4]}
              variant="lg"
              checked={gender === 'male'}
              onPress={this.onRadioButtonPressed}
              title="MALE"
              value="male"
            />
          </View>
        </CardWithHeaderAndButton>
      </View>
    )
  }
}
