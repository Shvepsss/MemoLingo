import { ScrollView } from 'react-native';

import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutContentProps } from '../types';

const DEFAULT_PADDING_VERTICAL = 10;
const DEFAULT_PADDING_HORIZONTAL = 20;

export const MainLayoutContentWrapper = ({ children, isScrollable }: MainLayoutContentProps) => {
  if (isScrollable) {
    return (
      <ScrollView
        style={{
          paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
          paddingVertical: DEFAULT_PADDING_VERTICAL,
        }}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        ...S.flex.one,
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
        paddingVertical: DEFAULT_PADDING_VERTICAL,
      }}
    >
      {children}
    </View>
  );
};
