import React from 'react'
import { Animated, View, TouchableWithoutFeedback } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import { cardStyle } from './styles'
import st from '../../styles'

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
    const parentProps = navigation.getParam('props', {})

    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: 'rgba(34, 34, 34, 0.7)',
            opacity: fadeModalValue,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <TouchableWithoutFeedback onPress={this.dismiss}>
              <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>
          </View>

          <View style={cardStyle}>
            <Component dismiss={this.dismiss} {...parentProps} />
          </View>
        </Animated.View>
      </View>
    )
  }
}

export default Modal
