import * as React from 'react'
import { Text, View, PickerIOS } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { StateProps, DispatchProps } from '../containers/GenderSelection'
import st from '../../../styles'
import CardWithHeaderAndButton from '../../../components/card-with-header-and-button/CardWithHeaderAndButton'

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
          {picker}
        </CardWithHeaderAndButton>
      </View>
    )
  }
}
