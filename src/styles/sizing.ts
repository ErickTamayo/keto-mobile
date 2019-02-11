import { StyleSheet } from 'react-native'
import { sequence } from './helpers'

const iterations = 32
const multiplier = 12
const widths: number[] = sequence(multiplier, iterations)

export const width = StyleSheet.create({
  w1: { width: widths[1] },
  w2: { width: widths[2] },
  w3: { width: widths[3] },
  w4: { width: widths[4] },
  w5: { width: widths[5] },
  w6: { width: widths[6] },
  w7: { width: widths[7] },
  w8: { width: widths[8] },
  w9: { width: widths[9] },
  w10: { width: widths[10] },
  w11: { width: widths[11] },
  w12: { width: widths[12] },
  w13: { width: widths[13] },
  w14: { width: widths[14] },
  w15: { width: widths[15] },
  w16: { width: widths[16] },
  w17: { width: widths[17] },
  w18: { width: widths[18] },
  w19: { width: widths[19] },
  w20: { width: widths[20] },
  w21: { width: widths[21] },
  w22: { width: widths[22] },
  w23: { width: widths[23] },
  w24: { width: widths[24] },
})

export const maxWidth = StyleSheet.create({
  w1: { maxWidth: widths[1] },
  w2: { maxWidth: widths[2] },
  w3: { maxWidth: widths[3] },
  w4: { maxWidth: widths[4] },
  w5: { maxWidth: widths[5] },
  w6: { maxWidth: widths[6] },
  w7: { maxWidth: widths[7] },
  w8: { maxWidth: widths[8] },
  w9: { maxWidth: widths[9] },
  w10: { maxWidth: widths[10] },
  w11: { maxWidth: widths[11] },
  w12: { maxWidth: widths[12] },
  w13: { maxWidth: widths[13] },
  w14: { maxWidth: widths[14] },
  w15: { maxWidth: widths[15] },
  w16: { maxWidth: widths[16] },
  w17: { maxWidth: widths[17] },
  w18: { maxWidth: widths[18] },
  w19: { maxWidth: widths[19] },
  w20: { maxWidth: widths[20] },
  w21: { maxWidth: widths[21] },
  w22: { maxWidth: widths[22] },
  w23: { maxWidth: widths[23] },
  w24: { maxWidth: widths[24] },
})

export const height = StyleSheet.create({
  h1: { height: widths[1] },
  h2: { height: widths[2] },
  h3: { height: widths[3] },
  h4: { height: widths[4] },
  h5: { height: widths[5] },
  h6: { height: widths[6] },
  h7: { height: widths[7] },
  h8: { height: widths[8] },
  h9: { height: widths[9] },
  h10: { height: widths[10] },
  h11: { height: widths[11] },
  h12: { height: widths[12] },
  h13: { height: widths[13] },
  h14: { height: widths[14] },
  h15: { height: widths[15] },
  h16: { height: widths[16] },
  h17: { height: widths[17] },
  h18: { height: widths[18] },
  h19: { height: widths[19] },
  h20: { height: widths[20] },
})
