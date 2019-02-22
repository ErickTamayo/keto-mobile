import React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import RadioButton from '../../../components/radio-button/RadioButton'
import withNewUserQueryQuery, { WithNewUserQueryProps } from '../hocs/withNewUserQuery'
import withUpdateNewUserMutation, {
  WithUpdateNewUserMutationProps,
} from '../hocs/withUpdateNewUserMutation'

export interface Props
  extends NavigationInjectedProps,
    WithNewUserQueryProps,
    WithUpdateNewUserMutationProps {}

class GenderSelection extends React.Component<Props, object> {
  private navigateToOtherParameters = () => {
    const { navigation } = this.props
    navigation.navigate('OtherParameters')
  }

  public render(): JSX.Element {
    const {
      newUser: { gender },
      updateNewUser,
    } = this.props

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
              checked={gender === 'FEMALE'}
              onPress={gender => {
                updateNewUser({ gender } as NewUser)
              }}
              title="FEMALE"
              value="FEMALE"
            />
            <RadioButton
              style={[st.m.a4]}
              variant="lg"
              checked={gender === 'MALE'}
              onPress={gender => {
                updateNewUser({ gender } as NewUser)
              }}
              title="MALE"
              value="MALE"
            />
          </View>
        </CardWithHeaderAndButton>
      </View>
    )
  }
}

export default withNewUserQueryQuery(withUpdateNewUserMutation(GenderSelection))
