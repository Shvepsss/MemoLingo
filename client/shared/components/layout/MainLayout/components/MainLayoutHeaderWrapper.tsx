import { Typography, View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutHeaderProps } from '../types';

export const MainLayoutHeaderWrapper = ({
  header,
  headerTitle,
  headerStyle,
}: MainLayoutHeaderProps) => {
  if (header) {
    return (
      <View style={[S.width.full, S.spaceHorizontal.px10, S.spaceVertical.px5, headerStyle]}>
        {header}
      </View>
    );
  }

  if (headerTitle) {
    return (
      <View style={[S.alignFlex.bothCenter, S.spaceHorizontal.px10, S.spaceVertical.px5]}>
        <Typography variant="h3" color="primary60">
          {headerTitle}
        </Typography>
      </View>
    );
  }

  return null;
};
