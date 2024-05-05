import { SafeAreaView } from 'react-native-safe-area-context';

export const withScreenProvider = (Screen: React.FC): React.FC => {
  return (props: any) => (
    <SafeAreaView style={{ flex: 1 }}>
      <Screen {...props} />
    </SafeAreaView>
  );
};
