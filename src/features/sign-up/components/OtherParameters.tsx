import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import PressableInput from '../../../components/pressable-input/PressableInput'
import AgeSelectionModal from '../modals/AgeSelectionModal'
import HeightSelectionModal from '../modals/HeightSelectionModal'
import WeightSelectionModal from '../modals/WeightSelectionModal'
import { ageToString, weightToString, heightToString } from '../../../helpers'
import withNewUserQuery, { WithNewUserQueryProps } from '../hocs/withNewUserQuery'
import withUpdateNewUserMutation, {
  WithUpdateNewUserMutationProps,
} from '../hocs/withUpdateNewUserMutation'

export interface Props
  extends NavigationInjectedProps,
    WithNewUserQueryProps,
    WithUpdateNewUserMutationProps {}

class OtherParameters extends Component<Props, {}> {
  private navigateToCreateAccount = () => {
    const { navigation } = this.props
    navigation.navigate('AccountCreation')
  }

  private openModal = (component: any, props: object) => {
    const { navigation } = this.props
    navigation.navigate('Modal', { component, props })
  }

  public render(): JSX.Element {
    const {
      newUser: { age, height, weight, weightGoal },
      updateNewUser,
    } = this.props

    const buttonShouldBeDisabled =
      age === null ||
      (height ? !height.feet || !height.inches || !height.centimeters : true) ||
      (weight ? !weight.pounds || !weight.kilograms : true) ||
      (weightGoal ? !weightGoal.pounds || !weightGoal.kilograms : true)

    return (
      <View style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}>
        <CardWithHeaderAndButton
          title="Please complete the following parameters"
          description="We will make sure you get better and personalized results"
          buttonText="Continue"
          onButtonPress={this.navigateToCreateAccount}
          disabled={!!buttonShouldBeDisabled}
        >
          <View style={[st.m.b1, st.m.t2]}>
            <PressableInput
              icon="calendar"
              placeholder="AGE"
              name="age"
              value={ageToString(age)}
              onPress={() =>
                this.openModal(AgeSelectionModal, {
                  onSelect: (age: number) => updateNewUser({ age } as NewUser),
                  age,
                })
              }
              onClear={() => updateNewUser({ age: null } as NewUser)}
            />
            <PressableInput
              icon="height"
              placeholder="HEIGHT"
              name="height"
              value={heightToString(height)}
              onPress={() =>
                this.openModal(HeightSelectionModal, {
                  onSelect: (updatedHeight: Height) =>
                    updateNewUser({ height: { ...height, ...updatedHeight } } as NewUser),
                  height,
                })
              }
              onClear={() =>
                updateNewUser({
                  height: {
                    ...height,
                    feet: null,
                    inches: null,
                    centimeters: null,
                  },
                } as NewUser)
              }
            />
            <PressableInput
              icon="scale"
              placeholder="WEIGHT"
              name="starting-weight"
              value={weightToString(weight)}
              onPress={() =>
                this.openModal(WeightSelectionModal, {
                  title: 'Weight',
                  onSelect: (updatedWeight: Weight) =>
                    updateNewUser({ weight: { ...weight, ...updatedWeight } } as NewUser),
                  weight,
                })
              }
              onClear={() =>
                updateNewUser({ weight: { ...weight, pounds: null, kilograms: null } } as NewUser)
              }
            />
            <PressableInput
              icon="goal-scale"
              placeholder="GOAL WEIGHT"
              name="goal-weight"
              value={weightToString(weightGoal)}
              onPress={() =>
                this.openModal(WeightSelectionModal, {
                  title: 'Goal Weight',
                  onSelect: (updatedweightGoal: Weight) =>
                    updateNewUser({
                      weightGoal: { ...weightGoal, ...updatedweightGoal },
                    } as NewUser),
                  weight: weightGoal,
                })
              }
              onClear={() =>
                updateNewUser({
                  weightGoal: {
                    ...weightGoal,
                    pounds: null,
                    kilograms: null,
                  },
                } as NewUser)
              }
            />
          </View>
        </CardWithHeaderAndButton>
      </View>
    )
  }
}

export default withNewUserQuery(withUpdateNewUserMutation(OtherParameters))
