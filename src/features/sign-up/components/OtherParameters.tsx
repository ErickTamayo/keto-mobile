import * as React from 'react'
import { View, PickerIOS } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import PressableInput from '../../../components/pressable-input/PressableInput'
import { weightToString, heightToString } from '../../../helpers'
import withOtherParametersQuery, {
  WithOtherParametersQueryProps,
} from '../hocs/withOtherParametersQuery'

import withOtherParametersClearMutation, {
  WithOtherParametersClearMutationProps,
} from '../hocs/withOtherParametersClearMutation'

export interface Props
  extends NavigationInjectedProps,
    WithOtherParametersQueryProps,
    WithOtherParametersClearMutationProps {}
class OtherParameters extends React.Component<Props, object> {
  private navigateToCreateAccount = () => {}

  public render(): JSX.Element {
    const { age, height, weight, weightGoal, clearFromSignUpUser } = this.props

    return (
      <View style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}>
        <CardWithHeaderAndButton
          title="Please complete the following parameters"
          description="We will make sure you get better and personalized results"
          buttonText="Continue"
          onButtonPress={this.navigateToCreateAccount}
          disabled={false}
        >
          <View style={[st.m.b1, st.m.t2]}>
            <PressableInput
              icon="calendar"
              placeholder="AGE"
              name="age"
              value={age ? `${age} years` : ''}
              onPress={() => console.log('age')}
              onClear={() => clearFromSignUpUser({ variables: { field: 'age' } })}
            />
            <PressableInput
              icon="height"
              placeholder="HEIGHT"
              name="height"
              value={heightToString(height)}
              onPress={() => console.log('height')}
              onClear={() => clearFromSignUpUser({ variables: { field: 'height' } })}
            />
            <PressableInput
              icon="scale"
              placeholder="WEIGHT"
              name="starting-weight"
              value={weightToString(weight)}
              onPress={() => console.log('weight')}
              onClear={() => clearFromSignUpUser({ variables: { field: 'weight' } })}
            />
            <PressableInput
              icon="goal-scale"
              placeholder="GOAL WEIGHT"
              name="goal-weight"
              value={weightToString(weightGoal)}
              onPress={() => console.log('goal weight')}
              onClear={() => clearFromSignUpUser({ variables: { field: 'weightGoal' } })}
            />
          </View>
        </CardWithHeaderAndButton>
      </View>
    )
  }
}

export default withOtherParametersQuery(withOtherParametersClearMutation(OtherParameters))
