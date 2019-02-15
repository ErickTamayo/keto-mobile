import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import PressableInput from '../../../components/pressable-input/PressableInput'
import AgeSelectionModal from '../modals/AgeSelectionModal'
import HeightSelectionModal from '../modals/HeightSelectionModal'
import { ageToString, weightToString, heightToString } from '../../../helpers'
import withOtherParametersQuery, {
  WithOtherParametersQueryProps,
} from '../hocs/withOtherParametersQuery'
import withOtherParametersMutation, {
  WithOtherParametersMutationProps,
} from '../hocs/withOtherParametersMutation'

export interface Props
  extends NavigationInjectedProps,
    WithOtherParametersQueryProps,
    WithOtherParametersMutationProps {}

class OtherParameters extends Component<Props, State> {
  private navigateToCreateAccount = () => {}

  private openModal = (component: any, props: object) => {
    const { navigation } = this.props
    navigation.navigate('Modal', { component, props })
  }

  private setAge = (age: number | null) => {
    const { setSignUpUserOtherParameters } = this.props
    setSignUpUserOtherParameters({ variables: { age } })
  }

  public render(): JSX.Element {
    const { age, height, weight, weightGoal, setSignUpUserOtherParameters } = this.props

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
              value={ageToString(age)}
              onPress={() =>
                this.openModal(AgeSelectionModal, {
                  onSelect: (age: number) => this.setAge(age),
                  age,
                })
              }
              onClear={() => this.setAge(null)}
            />
            <PressableInput
              icon="height"
              placeholder="HEIGHT"
              name="height"
              value={heightToString(height)}
              onPress={() =>
                this.openModal(HeightSelectionModal, {
                  onSelect: (height: Height) => console.log(height),
                  height,
                })
              }
              onClear={() =>
                setSignUpUserOtherParameters({
                  variables: {
                    height: {
                      ...height,
                      unit: 'imperial',
                      ft: null,
                      in: null,
                      cm: null,
                    },
                  },
                })
              }
            />
            <PressableInput
              icon="scale"
              placeholder="WEIGHT"
              name="starting-weight"
              value={weightToString(weight)}
              onPress={() => console.log('weight')}
              onClear={() =>
                setSignUpUserOtherParameters({
                  variables: {
                    weight: {
                      ...weight,
                      lbs: null,
                      kg: null,
                    },
                  },
                })
              }
            />
            <PressableInput
              icon="goal-scale"
              placeholder="GOAL WEIGHT"
              name="goal-weight"
              value={weightToString(weightGoal)}
              onPress={() => console.log('goal weight')}
              onClear={() =>
                setSignUpUserOtherParameters({
                  variables: {
                    weightGoal: {
                      ...weightGoal,
                      lbs: null,
                      kg: null,
                    },
                  },
                })
              }
            />
          </View>
        </CardWithHeaderAndButton>
      </View>
    )
  }
}

export default withOtherParametersQuery(withOtherParametersMutation(OtherParameters))
