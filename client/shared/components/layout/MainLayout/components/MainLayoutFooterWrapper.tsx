import { View } from 'app/shared/components/ui/index';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutFooterProps } from '../types';

export const MainLayoutFooterWrapper = ({ children }: MainLayoutFooterProps) => {
  return <View style={S.spaceAll.px10}>{children}</View>;
};
