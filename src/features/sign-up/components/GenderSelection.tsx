import * as React from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import RadioButton from '../../../components/radio-button/RadioButton'
import withGenderSelectionQuery, {
  WithGenderSelectionQueryProps,
} from '../hocs/withGenderSelectionQuery'
import withGenderSelectionMutation, {
  WithGenderSelectionMutationProps,
} from '../hocs/withGenderSelectionMutation'

export interface Props
  extends NavigationInjectedProps,
    WithGenderSelectionQueryProps,
    WithGenderSelectionMutationProps {}

class GenderSelection extends React.Component<Props, object> {
  private navigateToOtherParameters = () => {
    const { navigation } = this.props
    navigation.navigate('OtherParameters')
  }

  public render(): JSX.Element {
    const { gender, setGender } = this.props

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
    )
  }
}

export default withGenderSelectionQuery(withGenderSelectionMutation(GenderSelection))
