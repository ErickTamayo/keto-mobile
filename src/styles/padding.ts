import { StyleSheet } from 'react-native'
import { sequence } from './helpers'

const iterations = 11
const multiplier = 6.5
const paddings: number[] = sequence(multiplier, iterations)

const all = {
  a1: { padding: paddings[1] },
  a2: { padding: paddings[2] },
  a3: { padding: paddings[3] },
  a4: { padding: paddings[4] },
  a5: { padding: paddings[5] },
  a6: { padding: paddings[6] },
  a7: { padding: paddings[7] },
  a8: { padding: paddings[8] },
  a9: { padding: paddings[9] },
  a10: { padding: paddings[10] },
}

const left = {
  l1: { paddingLeft: paddings[1] },
  l2: { paddingLeft: paddings[2] },
  l3: { paddingLeft: paddings[3] },
  l4: { paddingLeft: paddings[4] },
  l5: { paddingLeft: paddings[5] },
  l6: { paddingLeft: paddings[6] },
  l7: { paddingLeft: paddings[7] },
  l8: { paddingLeft: paddings[8] },
  l9: { paddingLeft: paddings[9] },
  l10: { paddingLeft: paddings[10] },
}

const right = {
  r1: { paddingRight: paddings[1] },
  r2: { paddingRight: paddings[2] },
  r3: { paddingRight: paddings[3] },
  r4: { paddingRight: paddings[4] },
  r5: { paddingRight: paddings[5] },
  r6: { paddingRight: paddings[6] },
  r7: { paddingRight: paddings[7] },
  r8: { paddingRight: paddings[8] },
  r9: { paddingRight: paddings[9] },
  r10: { paddingRight: paddings[10] },
}

const top = {
  t1: { paddingTop: paddings[1] },
  t2: { paddingTop: paddings[2] },
  t3: { paddingTop: paddings[3] },
  t4: { paddingTop: paddings[4] },
  t5: { paddingTop: paddings[5] },
  t6: { paddingTop: paddings[6] },
  t7: { paddingTop: paddings[7] },
  t8: { paddingTop: paddings[8] },
  t9: { paddingTop: paddings[9] },
  t10: { paddingTop: paddings[10] },
}

const bottom = {
  b1: { paddingBottom: paddings[1] },
  b2: { paddingBottom: paddings[2] },
  b3: { paddingBottom: paddings[3] },
  b4: { paddingBottom: paddings[4] },
  b5: { paddingBottom: paddings[5] },
  b6: { paddingBottom: paddings[6] },
  b7: { paddingBottom: paddings[7] },
  b8: { paddingBottom: paddings[8] },
  b9: { paddingBottom: paddings[9] },
  b10: { paddingBottom: paddings[10] },
}

export default StyleSheet.create({
  ...all,
  ...left,
  ...right,
  ...top,
  ...bottom,
})
