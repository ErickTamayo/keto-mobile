import * as React from 'react'
import { View, PickerIOS } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { StateProps, DispatchProps } from '../containers/GenderSelection'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'
import PressableInput from '../../../components/pressable-input/PressableInput'

export interface Props extends StateProps, DispatchProps, NavigationInjectedProps {}

export default class OtherParameters extends React.Component<Props, object> {
  private navigateToCreateAccount = () => {}

  public render(): JSX.Element {
    const picker = (
      <PickerIOS
        selectedValue={'php'}
        style={{ width: 200 }}
        onValueChange={itemValue => this.setState({ language: itemValue })}
        itemStyle={{ color: '#626262' }}
      >
        <PickerIOS.Item label="Java" value="java" />
        <PickerIOS.Item label="JavaScript" value="js" />
        <PickerIOS.Item label="PHP" value="php" />
        <PickerIOS.Item label="Go" value="go" />
        <PickerIOS.Item label="Haskel" value="hsk" />
      </PickerIOS>
    )

    return (
      <View style={[st.flex.f1, st.items.center, st.justify.center, st.bg.greyLightest]}>
        <CardWithHeaderAndButton
          title="Please complete the following parameters"
          description="We will make sure you get better and personalized results"
          buttonText="Continue"
          onButtonPress={this.navigateToCreateAccount}
          disabled={false}
        >
          <View style={[st.m.b1]}>
            <PressableInput
              icon="calendar"
              placeholder="AGE"
              value="31 years"
              onPress={() => console.log('age')}
              onClear={() => console.log('clear')}
            />
            <PressableInput
              icon="height"
              placeholder="HEIGHT"
              value="5' 11'"
              onPress={() => console.log('height')}
              onClear={() => console.log('clear')}
            />
            <PressableInput
              icon="scale"
              placeholder="WEIGHT"
              value=""
              onPress={() => console.log('weight')}
              onClear={() => console.log('clear')}
            />
            <PressableInput
              icon="goal-scale"
              placeholder="GOAL WEIGHT"
              value=""
              onPress={() => console.log('goal weight')}
              onClear={() => console.log('clear')}
            />
          </View>
        </CardWithHeaderAndButton>
      </View>
    )
  }
}
