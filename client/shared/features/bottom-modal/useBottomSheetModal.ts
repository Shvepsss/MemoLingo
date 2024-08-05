import React from 'react';

import { BottomSheetModal } from '@gorhom/bottom-sheet';

export type UseBottomSheetModalProps = {
  initIsOpen: boolean;
};

type SnapTo = (index: number) => void;

type UseBottomSheetModalResponseBase<Ref extends any> = {
  bottomSheetModalRef: React.ForwardedRef<Ref>;
  openBottomSheet: () => void;
  closeBottomSheet: () => void;
  open: boolean;
  snapTo: SnapTo;
};

export type UseBottomSheetModalResponse = UseBottomSheetModalResponseBase<BottomSheetModal>;

export const useBottomSheetModal = ({
  initIsOpen,
}: UseBottomSheetModalProps): UseBottomSheetModalResponse => {
  const [open, setIsOpen] = React.useState(initIsOpen);
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const openBottomSheet = React.useCallback(() => {
    bottomSheetModalRef.current?.present();
    bottomSheetModalRef.current?.snapToIndex(0);
    setIsOpen(true);
  }, []);

  const closeBottomSheet = React.useCallback(() => {
    bottomSheetModalRef.current?.close();
    setIsOpen(false);
  }, []);

  const snapTo = React.useCallback((index: number) => {
    bottomSheetModalRef.current?.snapToIndex(index);
  }, []);

  React.useEffect(() => {
    if (initIsOpen) {
      openBottomSheet();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    bottomSheetModalRef,
    openBottomSheet,
    closeBottomSheet,
    open,
    snapTo,
  };
};
