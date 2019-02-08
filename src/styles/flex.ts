import { StyleSheet } from 'react-native'

export const flex = StyleSheet.create({
  f1: {
    flex: 1,
  },
  f2: {
    flex: 2,
  },
  f3: {
    flex: 3,
  },
  f4: {
    flex: 4,
  },
  f5: {
    flex: 5,
  },
  row: {
    flexDirection: 'row',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  col: {
    flexDirection: 'column',
  },
  colReverse: {
    flexDirection: 'column-reverse',
  },
})

export const justify = StyleSheet.create({
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  end: {
    justifyContent: 'flex-end',
  },
  between: {
    justifyContent: 'space-between',
  },
  around: {
    justifyContent: 'space-around',
  },
  evenly: {
    justifyContent: 'space-evenly',
  },
})

export const items = StyleSheet.create({
  stretch: {
    alignItems: 'stretch',
  },
  start: {
    alignItems: 'flex-start',
  },
  center: {
    alignItems: 'center',
  },
  end: {
    alignItems: 'flex-end',
  },
  baseline: {
    alignItems: 'baseline',
  },
})
