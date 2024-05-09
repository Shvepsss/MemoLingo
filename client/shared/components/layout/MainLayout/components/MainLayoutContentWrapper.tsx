import { View, ScrollView } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutContentProps } from '../types';

export const MainLayoutContentWrapper = ({ children, isScrollable }: MainLayoutContentProps) => {
  if (isScrollable) {
    return (
      <ScrollView style={[S.spaceHorizontal.px10, S.spaceVertical.px5]}>{children}</ScrollView>
    );
  }

  return <View style={[S.flex.one, S.spaceHorizontal.px10, S.spaceVertical.px5]}>{children}</View>;
};
