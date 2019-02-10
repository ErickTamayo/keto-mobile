import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { StateProps, DispatchProps } from '../containers/GenderSelection'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}

export default class GenderSelection extends React.Component<Props, object> {
  private navigateToOtherParameters = () => {
    const { navigation } = this.props
    navigation.navigate('OtherParameters')
  }

  // private navigateToLogIn = () => this.props.navigation.navigate('Login')

  public render(): JSX.Element {
    // const { counter, addCounter } = this.props
    const disabled = false
    return (
      <View style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}>
        <CardWithHeaderAndButton
          title="What's your gender?"
          description="We will make sure you get better and personalized results"
          buttonText="Continue"
          onButtonPress={this.navigateToOtherParameters}
          disabled={disabled}
        >
          <Text>Radio Buttons here</Text>
          <Text>Radio Buttons here</Text>
          <Text>Radio Buttons here</Text>
          <Text>Radio Buttons here</Text>
          <Text>Radio Buttons here</Text>
          <Text>Radio Buttons here</Text>
          {/* <RadioButton variant="lg" checked={true} value="female" onChange={this.handleChange}>
            Female
          </RadioButton>
          <RadioButton variant="lg" checked={false} value="male" onChange={this.handleChange}>
            Male
          </RadioButton> */}
        </CardWithHeaderAndButton>
      </View>
    )
  }
}
