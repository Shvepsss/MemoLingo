import React from 'react';

import {
  BottomSheetModal as NativeBottomSheetModal,
  BottomSheetFooter,
  BottomSheetView,
  type BottomSheetFooterProps,
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { Dimensions } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

import { BOTTOM_SHEET_MODAL_CONTENT_HEIGHT_VALUE } from './constants';
import { BottomSheetModalPropsBase } from './types';

const Backdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} pressBehavior="collapse" />
);

const { height } = Dimensions.get('window');

export type BottomSheetModalProps = BottomSheetModalPropsBase;
export const BottomSheetModal = React.forwardRef(
  (
    {
      index,
      footer,
      children,
      snapPoints = ['CONTENT_HEIGHT'],
      handleIndicatorStyle,
      withOverlay = true,
      withMaxHeightLimit = false,
      ...props
    }: BottomSheetModalProps,
    ref: React.ForwardedRef<NativeBottomSheetModal>,
  ) => {
    const spaceTop = 25;
    const spaceBottom = 25;
    const footerPresent = !!footer;
    const { animatedSnapPoints, animatedHandleHeight, animatedContentHeight, handleContentLayout } =
      useBottomSheetDynamicSnapPoints(snapPoints);

    const derivedSnapPoints = useDerivedValue(() => {
      const contentHeightSnapPointIndex = snapPoints.findIndex(
        point => point === BOTTOM_SHEET_MODAL_CONTENT_HEIGHT_VALUE,
      );
      const shouldAdjustContentHeight = footerPresent;
      const newSnapPoints = animatedSnapPoints.value.map((point, i) => {
        if (
          i === contentHeightSnapPointIndex &&
          shouldAdjustContentHeight &&
          typeof point === 'number' &&
          point > 0 &&
          typeof animatedSnapPoints.value[0] === 'number' &&
          animatedSnapPoints.value[0] > 0
        ) {
          return point + animatedSnapPoints.value[0];
        }

        return point;
      });

      return newSnapPoints;
    }, [animatedSnapPoints]);

    const renderFooter = React.useCallback<React.FC<BottomSheetFooterProps>>(
      footerProps => <BottomSheetFooter {...footerProps}>{footer}</BottomSheetFooter>,
      [footer],
    );

    return (
      <NativeBottomSheetModal
        ref={ref}
        index={index}
        {...props}
        snapPoints={derivedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        footerComponent={footer ? renderFooter : undefined}
        enablePanDownToClose={!!props.onDismiss}
        handleIndicatorStyle={handleIndicatorStyle}
        backdropComponent={withOverlay ? Backdrop : null}
      >
        <BottomSheetView
          onLayout={handleContentLayout}
          style={[withMaxHeightLimit && { maxHeight: height - spaceTop - spaceBottom }]}
        >
          {children}
        </BottomSheetView>
      </NativeBottomSheetModal>
    );
  },
);
