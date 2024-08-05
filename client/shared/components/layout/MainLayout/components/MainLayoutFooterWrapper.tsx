import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutFooterProps } from '../types';

export const MainLayoutFooterWrapper = ({ footer }: MainLayoutFooterProps) => {
  if (footer) {
    return <View style={S.spaceAll.px10}>{footer}</View>;
  }

  return null;
};
