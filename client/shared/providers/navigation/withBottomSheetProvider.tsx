import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { withScreenProvider } from './withScreenProvider';

export const withBottomSheetProvider = (Screen: React.FC): React.FC => {
  const ScreenWithProvider = withScreenProvider(Screen);

  return (props: any) => (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <ScreenWithProvider {...props} />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};
