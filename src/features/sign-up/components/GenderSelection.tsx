import * as React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { Query, Mutation } from 'react-apollo'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import RadioButton from '../../../components/radio-button/RadioButton'
import { GET_SIGN_UP_USER_GENDER } from '../queries'
import { SET_SIGN_UP_USER_GENDER } from '../mutations'

export interface Props extends NavigationInjectedProps {}

export default class GenderSelection extends React.Component<Props, object> {
  private navigateToOtherParameters = () => {
    const { navigation } = this.props
    navigation.navigate('OtherParameters')
  }

  private renderView = signUpUser => {
    const { gender } = signUpUser

    return (
      <Mutation mutation={SET_SIGN_UP_USER_GENDER}>
        {setGender => (
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
                  onPress={gender => {
                    setGender({ variables: { gender } })
                  }}
                  title="FEMALE"
                  value="female"
                />
                <RadioButton
                  style={[st.m.a4]}
                  variant="lg"
                  checked={gender === 'male'}
                  onPress={gender => {
                    setGender({ variables: { gender } })
                  }}
                  title="MALE"
                  value="male"
                />
              </View>
            </CardWithHeaderAndButton>
          </View>
        )}
      </Mutation>
    )
  }

  public render(): JSX.Element {
    return (
      <Query query={GET_SIGN_UP_USER_GENDER}>
        {({ data: { signUpUser }, loading }) => {
          return loading ? null : this.renderView(signUpUser)
        }}
      </Query>
    )
  }
}
