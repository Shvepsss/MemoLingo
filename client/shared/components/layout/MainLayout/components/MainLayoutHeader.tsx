import { Typography, View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutHeaderProps } from '../types';

const DEFAULT_PADDING_VERTICAL = 10;
const DEFAULT_PADDING_HORIZONTAL = 20;
export const MainLayoutHeader = ({ header, headerTitle }: MainLayoutHeaderProps) => {
  if (header) {
    return (
      <View
        style={{
          paddingVertical: DEFAULT_PADDING_VERTICAL,
          paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
          width: '100%',
        }}
      >
        {header}
      </View>
    );
  }

  if (headerTitle) {
    return (
      <View
        style={{
          ...S.alignFlex.bothCenter,
          paddingVertical: DEFAULT_PADDING_VERTICAL,
          paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
        }}
      >
        <Typography variant="h3" color="primary60">
          {headerTitle}
        </Typography>
      </View>
    );
  }

  return null;
};
