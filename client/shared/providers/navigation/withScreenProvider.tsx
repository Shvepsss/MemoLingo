import { SafeAreaView } from 'react-native-safe-area-context';

import * as S from 'app/shared/styles/@style-atoms';

export const withScreenProvider = (Screen: React.FC): React.FC => {
  return (props: any) => (
    <SafeAreaView style={[S.flex.one, { backgroundColor: 'white' }]}>
      <Screen {...props} />
    </SafeAreaView>
  );
};
