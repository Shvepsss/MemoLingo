import React from 'react';

import { StyleProp, ViewStyle } from 'react-native';

export type BottomSheetModalPropsBase = {
  snapPoints?: Array<string | number>;
  index: number;
  enableDismissOnClose?: boolean;
  onDismiss?: () => void;
  backgroundStyle?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  footer?: React.ReactNode;
  enablePanDownToClose?: boolean;
  open?: boolean;
  handleIndicatorStyle?: ViewStyle;
  withOverlay?: boolean;
  onChange?: (index: number) => void;
  withMaxHeightLimit?: boolean;
};
