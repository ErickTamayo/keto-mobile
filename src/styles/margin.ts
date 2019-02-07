import { StyleSheet } from 'react-native'
import { sequence } from './helpers'

const iterations = 11
const multiplier = 6.5
const margins: number[] = sequence(multiplier, iterations)

const all = {
  a1: { margin: margins[1] },
  a2: { margin: margins[2] },
  a3: { margin: margins[3] },
  a4: { margin: margins[4] },
  a5: { margin: margins[5] },
  a6: { margin: margins[6] },
  a7: { margin: margins[7] },
  a8: { margin: margins[8] },
  a9: { margin: margins[9] },
  a10: { margin: margins[10] },
}

const left = {
  l1: { marginLeft: margins[1] },
  l2: { marginLeft: margins[2] },
  l3: { marginLeft: margins[3] },
  l4: { marginLeft: margins[4] },
  l5: { marginLeft: margins[5] },
  l6: { marginLeft: margins[6] },
  l7: { marginLeft: margins[7] },
  l8: { marginLeft: margins[8] },
  l9: { marginLeft: margins[9] },
  l10: { marginLeft: margins[10] },
}

const right = {
  r1: { marginRight: margins[1] },
  r2: { marginRight: margins[2] },
  r3: { marginRight: margins[3] },
  r4: { marginRight: margins[4] },
  r5: { marginRight: margins[5] },
  r6: { marginRight: margins[6] },
  r7: { marginRight: margins[7] },
  r8: { marginRight: margins[8] },
  r9: { marginRight: margins[9] },
  r10: { marginRight: margins[10] },
}

const top = {
  t1: { marginTop: margins[1] },
  t2: { marginTop: margins[2] },
  t3: { marginTop: margins[3] },
  t4: { marginTop: margins[4] },
  t5: { marginTop: margins[5] },
  t6: { marginTop: margins[6] },
  t7: { marginTop: margins[7] },
  t8: { marginTop: margins[8] },
  t9: { marginTop: margins[9] },
  t10: { marginTop: margins[10] },
}

const bottom = {
  b1: { marginBottom: margins[1] },
  b2: { marginBottom: margins[2] },
  b3: { marginBottom: margins[3] },
  b4: { marginBottom: margins[4] },
  b5: { marginBottom: margins[5] },
  b6: { marginBottom: margins[6] },
  b7: { marginBottom: margins[7] },
  b8: { marginBottom: margins[8] },
  b9: { marginBottom: margins[9] },
  b10: { marginBottom: margins[10] },
}

export default StyleSheet.create({
  ...all,
  ...left,
  ...right,
  ...top,
  ...bottom,
})
