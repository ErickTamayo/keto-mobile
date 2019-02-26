import React from 'react'
import { Image } from 'react-native'
import st from '../../styles'

const iconLeftArrow = require('../../assets/images/icon-left-arrow.png')

const BackButton = () => <Image style={[st.m.l2]} source={iconLeftArrow} />
export default BackButton
