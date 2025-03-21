import { StyleSheet, ViewStyle } from 'react-native';

const theme = {
  roundness: 4,
  spacing: 2,
  baselineFont: 16,
} as const;

/**
 * SPACING ====================================================================
 */

export const spaceBottom = StyleSheet.create({
  px0: { paddingBottom: 0 },
  px1: { paddingBottom: theme.spacing },
  p2: { paddingBottom: 2 },
  px2: { paddingBottom: theme.spacing * 2 },
  px3: { paddingBottom: theme.spacing * 3 },
  px4: { paddingBottom: theme.spacing * 4 },
  px5: { paddingBottom: theme.spacing * 5 },
  px6: { paddingBottom: theme.spacing * 6 },
  px7: { paddingBottom: theme.spacing * 7 },
  px8: { paddingBottom: theme.spacing * 8 },
  px9: { paddingBottom: theme.spacing * 9 },
  px10: { paddingBottom: theme.spacing * 10 },
  px11: { paddingBottom: theme.spacing * 11 },
  px12: { paddingBottom: theme.spacing * 12 },
  px13: { paddingBottom: theme.spacing * 13 },
  px14: { paddingBottom: theme.spacing * 14 },
  px15: { paddingBottom: theme.spacing * 15 },
  px16: { paddingBottom: theme.spacing * 16 },
  px17: { paddingBottom: theme.spacing * 17 },
  px18: { paddingBottom: theme.spacing * 18 },
  px19: { paddingBottom: theme.spacing * 19 },
  px20: { paddingBottom: theme.spacing * 20 },
  px21: { paddingBottom: theme.spacing * 21 },
  px22: { paddingBottom: theme.spacing * 22 },
  px23: { paddingBottom: theme.spacing * 23 },
  px24: { paddingBottom: theme.spacing * 24 },
  px25: { paddingBottom: theme.spacing * 25 },
  px28: { paddingBottom: theme.spacing * 28 },
  px43: { paddingBottom: theme.spacing * 43 },

  mAuto: { marginBottom: 'auto' },
  mx0: { marginBottom: 0 },
  mx1: { marginBottom: theme.spacing },
  mx2: { marginBottom: theme.spacing * 2 },
  mx3: { marginBottom: theme.spacing * 3 },
  mx4: { marginBottom: theme.spacing * 4 },
  mx5: { marginBottom: theme.spacing * 5 },
  mx6: { marginBottom: theme.spacing * 6 },
  mx7: { marginBottom: theme.spacing * 7 },
  mx8: { marginBottom: theme.spacing * 8 },
  mx9: { marginBottom: theme.spacing * 9 },
  mx10: { marginBottom: theme.spacing * 10 },
  mx11: { marginBottom: theme.spacing * 11 },
  mx12: { marginBottom: theme.spacing * 12 },
  mx13: { marginBottom: theme.spacing * 13 },
  mx14: { marginBottom: theme.spacing * 14 },
  mx15: { marginBottom: theme.spacing * 15 },
  mx16: { marginBottom: theme.spacing * 16 },
  mx17: { marginBottom: theme.spacing * 17 },
  mx18: { marginBottom: theme.spacing * 18 },
  mx19: { marginBottom: theme.spacing * 19 },
  mx20: { marginBottom: theme.spacing * 20 },
  mx21: { marginBottom: theme.spacing * 21 },
  mx22: { marginBottom: theme.spacing * 22 },
  mx23: { marginBottom: theme.spacing * 23 },
  mx24: { marginBottom: theme.spacing * 24 },
  mx25: { marginBottom: theme.spacing * 25 },
});

export const spaceTop = StyleSheet.create({
  px0: { paddingTop: 0 },
  px1: { paddingTop: theme.spacing },
  px2: { paddingTop: theme.spacing * 2 },
  px3: { paddingTop: theme.spacing * 3 },
  px4: { paddingTop: theme.spacing * 4 },
  px5: { paddingTop: theme.spacing * 5 },
  px6: { paddingTop: theme.spacing * 6 },
  px7: { paddingTop: theme.spacing * 7 },
  px8: { paddingTop: theme.spacing * 8 },
  px9: { paddingTop: theme.spacing * 9 },
  px10: { paddingTop: theme.spacing * 10 },
  px11: { paddingTop: theme.spacing * 11 },
  px12: { paddingTop: theme.spacing * 12 },
  px13: { paddingTop: theme.spacing * 13 },
  px14: { paddingTop: theme.spacing * 14 },
  px15: { paddingTop: theme.spacing * 15 },
  px16: { paddingTop: theme.spacing * 16 },
  px17: { paddingTop: theme.spacing * 17 },
  px18: { paddingTop: theme.spacing * 18 },
  px19: { paddingTop: theme.spacing * 19 },
  px20: { paddingTop: theme.spacing * 20 },
  px21: { paddingTop: theme.spacing * 21 },
  px22: { paddingTop: theme.spacing * 22 },
  px24: { paddingTop: theme.spacing * 24 },
  px32: { paddingTop: theme.spacing * 32 },

  mAuto: { marginTop: 'auto' },
  mx0: { marginTop: 0 },
  mx1: { marginTop: theme.spacing },
  mx2: { marginTop: theme.spacing * 2 },
  mx3: { marginTop: theme.spacing * 3 },
  mx4: { marginTop: theme.spacing * 4 },
  mx5: { marginTop: theme.spacing * 5 },
  mx6: { marginTop: theme.spacing * 6 },
  mx7: { marginTop: theme.spacing * 7 },
  mx8: { marginTop: theme.spacing * 8 },
  mx9: { marginTop: theme.spacing * 9 },
  mx10: { marginTop: theme.spacing * 10 },
  mx12: { marginTop: theme.spacing * 12 },
  mx13: { marginTop: theme.spacing * 13 },
  mx14: { marginTop: theme.spacing * 14 },
  mx15: { marginTop: theme.spacing * 15 },
  mx16: { marginTop: theme.spacing * 16 },
  mx17: { marginTop: theme.spacing * 17 },
  mx18: { marginTop: theme.spacing * 18 },
  mx19: { marginTop: theme.spacing * 19 },
  mx20: { marginTop: theme.spacing * 20 },
  mx21: { marginTop: theme.spacing * 21 },
  mx22: { marginTop: theme.spacing * 22 },
  mx24: { marginTop: theme.spacing * 24 },
  mx25: { marginTop: theme.spacing * 25 },
  mx27: { marginTop: theme.spacing * 27 },
  mx30: { marginTop: theme.spacing * 30 },
  mx43: { marginTop: theme.spacing * 43 },
});

export const spaceVertical = StyleSheet.create({
  px0: { paddingVertical: 0 },
  px1: { paddingVertical: theme.spacing },
  px1Half: { paddingVertical: theme.spacing * 1.5 },
  px2: { paddingVertical: theme.spacing * 2 },
  px3: { paddingVertical: theme.spacing * 3 },
  px4: { paddingVertical: theme.spacing * 4 },
  px5: { paddingVertical: theme.spacing * 5 },
  px6: { paddingVertical: theme.spacing * 6 },
  px7: { paddingVertical: theme.spacing * 7 },
  px8: { paddingVertical: theme.spacing * 8 },
  px9: { paddingVertical: theme.spacing * 9 },
  px10: { paddingVertical: theme.spacing * 10 },
  px11: { paddingVertical: theme.spacing * 11 },
  px12: { paddingVertical: theme.spacing * 12 },
  px13: { paddingVertical: theme.spacing * 13 },
  px16: { paddingVertical: theme.spacing * 16 },
  px18: { paddingVertical: theme.spacing * 18 },
  px19: { paddingVertical: theme.spacing * 19 },
  px20: { paddingVertical: theme.spacing * 20 },
  px21: { paddingVertical: theme.spacing * 21 },
  px22: { paddingVertical: theme.spacing * 22 },
  px23: { paddingVertical: theme.spacing * 23 },
  px24: { paddingVertical: theme.spacing * 24 },

  mAuto: { marginVertical: 'auto' },
  mx0: { marginVertical: 0 },
  mx1: { marginVertical: theme.spacing },
  mx2: { marginVertical: theme.spacing * 2 },
  mx3: { marginVertical: theme.spacing * 3 },
  mx4: { marginVertical: theme.spacing * 4 },
  mx5: { marginVertical: theme.spacing * 5 },
  mx6: { marginVertical: theme.spacing * 6 },
  mx7: { marginVertical: theme.spacing * 7 },
  mx8: { marginVertical: theme.spacing * 8 },
  mx9: { marginVertical: theme.spacing * 9 },
  mx10: { marginVertical: theme.spacing * 10 },
  mx11: { marginVertical: theme.spacing * 11 },
  mx12: { marginVertical: theme.spacing * 12 },
  mx13: { marginVertical: theme.spacing * 13 },
  mx14: { marginVertical: theme.spacing * 14 },
  mx15: { marginVertical: theme.spacing * 15 },
  mx16: { marginVertical: theme.spacing * 16 },
  mx17: { marginVertical: theme.spacing * 17 },
  mx18: { marginVertical: theme.spacing * 18 },
  mx19: { marginVertical: theme.spacing * 19 },
  mx20: { marginVertical: theme.spacing * 20 },
  mx21: { marginVertical: theme.spacing * 21 },
  mx22: { marginVertical: theme.spacing * 22 },
});

export const spaceHorizontal = StyleSheet.create({
  px0: { paddingHorizontal: 0 },
  px1: { paddingHorizontal: theme.spacing },
  px2: { paddingHorizontal: theme.spacing * 2 },
  px2Half: { paddingHorizontal: theme.spacing * 2.5 },
  px3: { paddingHorizontal: theme.spacing * 3 },
  px4: { paddingHorizontal: theme.spacing * 4 },
  px5: { paddingHorizontal: theme.spacing * 5 },
  px6: { paddingHorizontal: theme.spacing * 6 },
  px7: { paddingHorizontal: theme.spacing * 7 },
  px8: { paddingHorizontal: theme.spacing * 8 },
  px9: { paddingHorizontal: theme.spacing * 9 },
  px10: { paddingHorizontal: theme.spacing * 10 },
  px11: { paddingHorizontal: theme.spacing * 11 },
  px12: { paddingHorizontal: theme.spacing * 12 },
  px13: { paddingHorizontal: theme.spacing * 13 },
  px16: { paddingHorizontal: theme.spacing * 16 },
  px17: { paddingHorizontal: theme.spacing * 17 },
  px18: { paddingHorizontal: theme.spacing * 18 },
  px19: { paddingHorizontal: theme.spacing * 19 },
  px20: { paddingHorizontal: theme.spacing * 20 },
  px21: { paddingHorizontal: theme.spacing * 21 },
  px22: { paddingHorizontal: theme.spacing * 22 },
  px24: { paddingHorizontal: theme.spacing * 24 },

  mAuto: { marginHorizontal: 'auto' },
  mx0: { marginHorizontal: 0 },
  mx1: { marginHorizontal: theme.spacing },
  mx2: { marginHorizontal: theme.spacing * 2 },
  mx3: { marginHorizontal: theme.spacing * 3 },
  mx4: { marginHorizontal: theme.spacing * 4 },
  mx5: { marginHorizontal: theme.spacing * 5 },
  mx6: { marginHorizontal: theme.spacing * 6 },
  mx7: { marginHorizontal: theme.spacing * 7 },
  mx8: { marginHorizontal: theme.spacing * 8 },
  mx8Minus: { marginHorizontal: -theme.spacing * 8 },
  mx9: { marginHorizontal: theme.spacing * 9 },
  mx10: { marginHorizontal: theme.spacing * 10 },
  mx11: { marginHorizontal: theme.spacing * 11 },
  mx12: { marginHorizontal: theme.spacing * 12 },
  mx15: { marginHorizontal: theme.spacing * 15 },
  mx16: { marginHorizontal: theme.spacing * 16 },
  mx17: { marginHorizontal: theme.spacing * 17 },
  mx18: { marginHorizontal: theme.spacing * 18 },
  mx19: { marginHorizontal: theme.spacing * 19 },
  mx20: { marginHorizontal: theme.spacing * 20 },
  mx21: { marginHorizontal: theme.spacing * 21 },
  mx22: { marginHorizontal: theme.spacing * 22 },
  mx24: { marginHorizontal: theme.spacing * 24 },
});

export const spaceRight = StyleSheet.create({
  mAuto: { marginRight: 'auto' },
  mx0: { marginRight: 0 },
  mx1: { marginRight: theme.spacing },
  mx2: { marginRight: theme.spacing * 2 },
  mx3: { marginRight: theme.spacing * 3 },
  mx4: { marginRight: theme.spacing * 4 },
  mx5: { marginRight: theme.spacing * 5 },
  mx6: { marginRight: theme.spacing * 6 },
  mx7: { marginRight: theme.spacing * 7 },
  mx8: { marginRight: theme.spacing * 8 },
  mx9: { marginRight: theme.spacing * 9 },
  mx10: { marginRight: theme.spacing * 10 },
  mx11: { marginRight: theme.spacing * 11 },
  mx12: { marginRight: theme.spacing * 12 },
  mx13: { marginRight: theme.spacing * 13 },
  mx14: { marginRight: theme.spacing * 14 },
  mx15: { marginRight: theme.spacing * 15 },
  mx16: { marginRight: theme.spacing * 16 },
  mx17: { marginRight: theme.spacing * 17 },
  mx18: { marginRight: theme.spacing * 18 },
  mx19: { marginRight: theme.spacing * 19 },
  mx20: { marginRight: theme.spacing * 20 },
  mx21: { marginRight: theme.spacing * 21 },
  mx22: { marginRight: theme.spacing * 22 },
  mx30: { marginRight: theme.spacing * 30 },

  px0: { paddingRight: 0 },
  px1: { paddingRight: theme.spacing },
  px2: { paddingRight: theme.spacing * 2 },
  px3: { paddingRight: theme.spacing * 3 },
  px4: { paddingRight: theme.spacing * 4 },
  px5: { paddingRight: theme.spacing * 5 },
  px6: { paddingRight: theme.spacing * 6 },
  px7: { paddingRight: theme.spacing * 7 },
  px8: { paddingRight: theme.spacing * 8 },
  px9: { paddingRight: theme.spacing * 9 },
  px10: { paddingRight: theme.spacing * 10 },
  px11: { paddingRight: theme.spacing * 11 },
  px12: { paddingRight: theme.spacing * 12 },
  px13: { paddingRight: theme.spacing * 13 },
  px14: { paddingRight: theme.spacing * 14 },
  px15: { paddingRight: theme.spacing * 15 },
  px16: { paddingRight: theme.spacing * 16 },
  px17: { paddingRight: theme.spacing * 17 },
  px18: { paddingRight: theme.spacing * 18 },
  px19: { paddingRight: theme.spacing * 19 },
  px20: { paddingRight: theme.spacing * 20 },
  px21: { paddingRight: theme.spacing * 21 },
  px22: { paddingRight: theme.spacing * 22 },
  px23: { paddingRight: theme.spacing * 23 },
  px24: { paddingRight: theme.spacing * 24 },
  px25: { paddingRight: theme.spacing * 25 },
  px26: { paddingRight: theme.spacing * 26 },
});

export const spaceLeft = StyleSheet.create({
  px0: { paddingLeft: 0 },
  px1: { paddingLeft: theme.spacing },
  px2: { paddingLeft: theme.spacing * 2 },
  px3: { paddingLeft: theme.spacing * 3 },
  px4: { paddingLeft: theme.spacing * 4 },
  px5: { paddingLeft: theme.spacing * 5 },
  px6: { paddingLeft: theme.spacing * 6 },
  px7: { paddingLeft: theme.spacing * 7 },
  px8: { paddingLeft: theme.spacing * 8 },
  px9: { paddingLeft: theme.spacing * 9 },
  px10: { paddingLeft: theme.spacing * 10 },
  px11: { paddingLeft: theme.spacing * 11 },
  px12: { paddingLeft: theme.spacing * 12 },
  px13: { paddingLeft: theme.spacing * 13 },
  px14: { paddingLeft: theme.spacing * 14 },
  px15: { paddingLeft: theme.spacing * 15 },
  px16: { paddingLeft: theme.spacing * 16 },
  px17: { paddingLeft: theme.spacing * 17 },
  px18: { paddingLeft: theme.spacing * 18 },
  px19: { paddingLeft: theme.spacing * 19 },
  px20: { paddingLeft: theme.spacing * 20 },
  px21: { paddingLeft: theme.spacing * 21 },
  px22: { paddingLeft: theme.spacing * 22 },

  mAuto: { marginLeft: 'auto' },
  mx0: { marginLeft: 0 },
  mx1: { marginLeft: theme.spacing },
  mx2: { marginLeft: theme.spacing * 2 },
  mx3: { marginLeft: theme.spacing * 3 },
  mx4: { marginLeft: theme.spacing * 4 },
  mx5: { marginLeft: theme.spacing * 5 },
  mx6: { marginLeft: theme.spacing * 6 },
  mx7: { marginLeft: theme.spacing * 7 },
  mx8: { marginLeft: theme.spacing * 8 },
  mx8Half: { marginLeft: theme.spacing * 8.5 },
  mx9: { marginLeft: theme.spacing * 9 },
  mx10: { marginLeft: theme.spacing * 10 },
  mx11: { marginLeft: theme.spacing * 11 },
  mx12: { marginLeft: theme.spacing * 12 },
  mx13: { marginLeft: theme.spacing * 13 },
  mx14: { marginLeft: theme.spacing * 14 },
  mx16: { marginLeft: theme.spacing * 16 },
  mx17: { marginLeft: theme.spacing * 17 },
  mx18: { marginLeft: theme.spacing * 18 },
  mx19: { marginLeft: theme.spacing * 19 },
  mx20: { marginLeft: theme.spacing * 20 },
  mx21: { marginLeft: theme.spacing * 21 },
  mx22: { marginLeft: theme.spacing * 22 },
});

export const spaceAll = StyleSheet.create({
  px0: { padding: 0 },
  px0Half: { padding: theme.spacing / 2 },
  px1: { padding: theme.spacing },
  px2: { padding: theme.spacing * 2 },
  px3: { padding: theme.spacing * 3 },
  px4: { padding: theme.spacing * 4 },
  px5: { padding: theme.spacing * 5 },
  px6: { padding: theme.spacing * 6 },
  px7: { padding: theme.spacing * 7 },
  px8: { padding: theme.spacing * 8 },
  px9: { padding: theme.spacing * 9 },
  px10: { padding: theme.spacing * 10 },
  px11: { padding: theme.spacing * 11 },
  px12: { padding: theme.spacing * 12 },
  px13: { padding: theme.spacing * 13 },
  px14: { padding: theme.spacing * 14 },
  px15: { padding: theme.spacing * 15 },
  px16: { padding: theme.spacing * 16 },
  px17: { padding: theme.spacing * 17 },
  px18: { padding: theme.spacing * 18 },
  px19: { padding: theme.spacing * 19 },
  px20: { padding: theme.spacing * 20 },
  px21: { padding: theme.spacing * 21 },
  px22: { padding: theme.spacing * 22 },
  px23: { padding: theme.spacing * 23 },
  px24: { padding: theme.spacing * 24 },

  mAuto: { margin: 'auto' },
  mx0: { margin: 0 },
  mx1: { margin: theme.spacing },
  mx2: { margin: theme.spacing * 2 },
  mx3: { margin: theme.spacing * 3 },
  mx4: { margin: theme.spacing * 4 },
  mx5: { margin: theme.spacing * 5 },
  mx6: { margin: theme.spacing * 6 },
  mx7: { margin: theme.spacing * 7 },
  mx8: { margin: theme.spacing * 8 },
  mx9: { margin: theme.spacing * 9 },
  mx10: { margin: theme.spacing * 10 },
  mx11: { margin: theme.spacing * 11 },
  mx12: { margin: theme.spacing * 12 },
  mx13: { margin: theme.spacing * 13 },
  mx14: { margin: theme.spacing * 14 },
  mx15: { margin: theme.spacing * 15 },
  mx16: { margin: theme.spacing * 16 },
  mx17: { margin: theme.spacing * 17 },
  mx18: { margin: theme.spacing * 18 },
  mx19: { margin: theme.spacing * 19 },
  mx20: { margin: theme.spacing * 20 },
  mx21: { margin: theme.spacing * 21 },
  mx22: { margin: theme.spacing * 22 },
});

export const gapAll = StyleSheet.create({
  gx0: { gap: 0 },
  gx1: { gap: theme.spacing * 1 },
  gx2: { gap: theme.spacing * 2 },
  gx3: { gap: theme.spacing * 3 },
  gx4: { gap: theme.spacing * 4 },
  gx5: { gap: theme.spacing * 5 },
  gx6: { gap: theme.spacing * 6 },
  gx7: { gap: theme.spacing * 7 },
  gx8: { gap: theme.spacing * 8 },
  gx9: { gap: theme.spacing * 9 },
  gx10: { gap: theme.spacing * 10 },
  gx12: { gap: theme.spacing * 12 },
  gx14: { gap: theme.spacing * 14 },
  gx15: { gap: theme.spacing * 15 },
  gx16: { gap: theme.spacing * 16 },
  gx17: { gap: theme.spacing * 17 },
  gx18: { gap: theme.spacing * 18 },
  gx19: { gap: theme.spacing * 19 },
  gx20: { gap: theme.spacing * 20 },
  gx24: { gap: theme.spacing * 24 },
});

export const gapRow = StyleSheet.create({
  gx0: { rowGap: 0 },
  gx1: { rowGap: theme.spacing * 1 },
  gx2: { rowGap: theme.spacing * 2 },
  gx3: { rowGap: theme.spacing * 3 },
  gx4: { rowGap: theme.spacing * 4 },
  gx5: { rowGap: theme.spacing * 5 },
  gx6: { rowGap: theme.spacing * 6 },
  gx7: { rowGap: theme.spacing * 7 },
  gx8: { rowGap: theme.spacing * 8 },
  gx9: { rowGap: theme.spacing * 9 },
  gx10: { rowGap: theme.spacing * 10 },
  gx12: { rowGap: theme.spacing * 12 },
  gx14: { rowGap: theme.spacing * 14 },
  gx16: { rowGap: theme.spacing * 16 },
  gx17: { rowGap: theme.spacing * 17 },
  gx18: { rowGap: theme.spacing * 18 },
  gx19: { rowGap: theme.spacing * 19 },
  gx20: { rowGap: theme.spacing * 20 },
  gx21: { rowGap: theme.spacing * 21 },
  gx22: { rowGap: theme.spacing * 22 },
  gx23: { rowGap: theme.spacing * 23 },
  gx24: { rowGap: theme.spacing * 24 },
  gx32: { rowGap: theme.spacing * 32 },
});

export const gapColumn = StyleSheet.create({
  gx0: { columnGap: 0 },
  gx1: { columnGap: theme.spacing * 1 },
  gx2: { columnGap: theme.spacing * 2 },
  gx3: { columnGap: theme.spacing * 3 },
  gx4: { columnGap: theme.spacing * 4 },
  gx5: { columnGap: theme.spacing * 5 },
  gx6: { columnGap: theme.spacing * 6 },
  gx7: { columnGap: theme.spacing * 7 },
  gx8: { columnGap: theme.spacing * 8 },
  gx9: { columnGap: theme.spacing * 9 },
  gx10: { columnGap: theme.spacing * 10 },
  gx12: { columnGap: theme.spacing * 12 },
  gx13: { columnGap: theme.spacing * 13 },
  gx14: { columnGap: theme.spacing * 14 },
  gx15: { columnGap: theme.spacing * 15 },
  gx16: { columnGap: theme.spacing * 16 },
  gx17: { columnGap: theme.spacing * 17 },
  gx18: { columnGap: theme.spacing * 18 },
  gx19: { columnGap: theme.spacing * 19 },
  gx20: { columnGap: theme.spacing * 20 },
});

/**
 * ALIGNMENT ==================================================================
 */

export const alignFlex = StyleSheet.create({
  jCenter: { justifyContent: 'center' },
  jStart: { justifyContent: 'flex-start' },
  jSpaceBetween: { justifyContent: 'space-between' },
  jSpaceAround: { justifyContent: 'space-around' },
  jSpaceEvenly: { justifyContent: 'space-evenly' },
  jFlexEnd: { justifyContent: 'flex-end' },
  aCenter: { alignItems: 'center' },
  aStart: { alignItems: 'flex-start' },
  aEnd: { alignItems: 'flex-end' },
  aStretch: { alignItems: 'stretch' },
  aSelfCenter: { alignSelf: 'center' },
  aSelfStart: { alignSelf: 'flex-start' },
  aSelfEnd: { alignSelf: 'flex-end' },
  bothCenter: { justifyContent: 'center', alignItems: 'center' },
});

export const alignText = StyleSheet.create({
  vCenter: { textAlignVertical: 'center' },
  hCenter: { textAlign: 'center' },
  bothCenter: { textAlign: 'center', textAlignVertical: 'center' },
  hRight: { textAlign: 'right' },
  auto: { textAlign: 'auto' },
});

export const flex = StyleSheet.create({
  one: { flex: 1 },
  two: { flex: 2 },
  shrink: { flexShrink: 1 },
  noShrink: { flexShrink: 0 },
  grow: { flexGrow: 1 },
  noGrow: { flexGrow: 0 },
  flexBasisFull: { flexBasis: '100%' },
  row: { flexDirection: 'row' },
  rowReverse: { flexDirection: 'row-reverse' },
  column: { flexDirection: 'column' },
  wrap: { flexWrap: 'wrap' },
  noWrap: { flexWrap: 'nowrap' },
  gridHalf: { flexGrow: 1, flexShrink: 1, flexBasis: '50%' },
});

export const overflow = StyleSheet.create({
  hidden: { overflow: 'hidden' },
  scroll: { overflow: 'scroll' },
  visible: { overflow: 'visible' },
});

export const position = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
});

export const zIndex = StyleSheet.create({
  messageHandler: {
    zIndex: 10000,
  },
  one: {
    zIndex: 1,
  },
  two: {
    zIndex: 2,
  },
  minusOne: {
    zIndex: -1,
  },
});

export const textTransform = StyleSheet.create({
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  none: {
    textTransform: 'none',
  },
});

/**
 * DECORATION =================================================================
 */

export const border = StyleSheet.create({
  textUnderline: { textDecorationLine: 'underline' },
  wid0: { borderWidth: 0 },
  widHalf: { borderWidth: 0.5 },
  bWid0: { borderBottomWidth: 0 },
  bWid1: { borderBottomWidth: 1 },
  bTWid1: { borderTopWidth: 1 },
  wid1: { borderWidth: 1 },
  wid2: { borderWidth: 2 },
  wid16: { borderWidth: 16 },
  radx0: { borderRadius: 0 },
  rad2: { borderRadius: 2 },
  rad5: { borderRadius: 5 },
  radx0Half: { borderRadius: theme.roundness / 2 },
  radx1: { borderRadius: theme.roundness },
  radx2: { borderRadius: theme.roundness * 2 },
  radx2Half: { borderRadius: theme.roundness * 2.5 },
  radx3: { borderRadius: theme.roundness * 3 },
  radx4: { borderRadius: theme.roundness * 4 },
  radx5: { borderRadius: theme.roundness * 5 },
  radx6: { borderRadius: theme.roundness * 6 },
  radx7: { borderRadius: theme.roundness * 7 },
  radx8: { borderRadius: theme.roundness * 8 },
  radx10: { borderRadius: theme.roundness * 10 },
  radx11: { borderRadius: theme.roundness * 12.5 },

  radx1Top: { borderTopLeftRadius: theme.roundness, borderTopRightRadius: theme.roundness },
  radx2Top: { borderTopLeftRadius: theme.roundness * 2, borderTopRightRadius: theme.roundness * 2 },
  radx5Top: {
    borderTopLeftRadius: theme.roundness * 5,
    borderTopRightRadius: theme.roundness * 5,
  },
  radx5Bottom: {
    borderBottomLeftRadius: theme.roundness * 5,
    borderBottomRightRadius: theme.roundness * 5,
  },
  radx2Bottom: {
    borderBottomLeftRadius: theme.roundness * 2,
    borderBottomRightRadius: theme.roundness * 2,
  },
  radx0Bottom: {
    borderBottomLeftRadius: theme.roundness * 0,
    borderBottomRightRadius: theme.roundness * 0,
  },
});

export const width = StyleSheet.create({
  full: { width: '100%' },
  maxFull: { maxWidth: '100%' },
  minFull: { minWidth: '100%' },
  half: { width: '50%' },
  auto: { width: 'auto' },
});

export const height = StyleSheet.create({
  none: { height: 0 },
  maxFull: { maxHeight: '100%' },
  full: { height: '100%' },
  half: { height: '50%' },
  auto: { height: 'auto' },
});

export const aspectRatio = StyleSheet.create({
  one: { aspectRatio: 1 },
});

/**
 * Elevation / shadows =====================================================================
 */

export const elevation = StyleSheet.create({
  el0: { elevation: 0 },
  el1: { elevation: 1 },
  el2: { elevation: 2 },
  el3: { elevation: 3 },
  el4: { elevation: 4 },
  el5: { elevation: 5 },
});

export const cursor = StyleSheet.create({
  pointer: { cursor: 'pointer' } as ViewStyle,
  default: { cursor: 'default' } as ViewStyle,
});
