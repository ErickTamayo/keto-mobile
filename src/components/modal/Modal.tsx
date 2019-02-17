import React from 'react'
import { Animated, View, TouchableWithoutFeedback } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import {
  cardStyle,
  containerStyle,
  backgroundStyle,
  dismissContainerStyle,
  dismissStyle,
} from './styles'

interface State {
  fadeModalValue: Animated.Value
}

class Modal extends React.Component<NavigationInjectedProps, State> {
  public state = {
    fadeModalValue: new Animated.Value(0),
  }

  private fadeInModalAnimation: Animated.CompositeAnimation
  private fadeOutModalAnimation: Animated.CompositeAnimation

  constructor(props: NavigationInjectedProps) {
    super(props)

    this.fadeInModalAnimation = this.setUpModalFadeIn()
    this.fadeOutModalAnimation = this.setUpModalFadeOut()
  }

  public componentDidMount() {
    this.fadeInModalAnimation.start()
  }

  private setUpModalFadeIn = () => {
    return Animated.timing(this.state.fadeModalValue, {
      toValue: 1,
      duration: 150,
    })
  }

  private setUpModalFadeOut = () => {
    return Animated.timing(this.state.fadeModalValue, {
      toValue: 0,
      duration: 75,
    })
  }

  private dismiss = () => {
    const { navigation } = this.props
    this.fadeOutModalAnimation.start(() => navigation.pop())
  }

  public render() {
    const { navigation } = this.props
    const { fadeModalValue } = this.state
    const Component = navigation.getParam('component', View)
    const componentProps = navigation.getParam('props', {})

    return (
      <View style={containerStyle}>
        <Animated.View
          style={[
            backgroundStyle,
            { backgroundColor: 'rgba(34, 34, 34, 0.7)', opacity: fadeModalValue },
          ]}
        >
          <View style={dismissContainerStyle}>
            <TouchableWithoutFeedback onPress={this.dismiss}>
              <View style={dismissStyle} />
            </TouchableWithoutFeedback>
          </View>

          <View style={cardStyle}>
            <Component dismiss={this.dismiss} {...componentProps} />
          </View>
        </Animated.View>
      </View>
    )
  }
}

export default Modal
