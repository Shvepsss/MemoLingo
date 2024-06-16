import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { type ColumnProps } from '../types';

export const ColumnWrapper = ({ children, style }: ColumnProps) => {
  return <View style={[style, S.flex.one]}>{children}</View>;
};
