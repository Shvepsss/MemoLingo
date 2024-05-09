import { useTheme } from 'app/shared/hooks/styles';
import * as S from 'app/shared/styles/@style-atoms';

import { Divider } from '../Divider';
import { Typography } from '../Typography';
import { VectorIcon } from '../VectorIcon';
import { View } from '../View';

type SectionHeaderProps = {
  title: string;
  details: string;
};

const ICON_SIZE = 50;

export const SectionHeader = ({ title, details }: SectionHeaderProps) => {
  const theme = useTheme();
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.primary80,
        },
        S.flex.row,
        S.spaceAll.px5,
        S.border.radx2Half,
      ]}
    >
      <View style={S.flex.two}>
        <Typography variant="h4" color="black0">
          {title}
        </Typography>
        <Typography variant="doubleExtraLargeRegular" color="black0">
          {details}
        </Typography>
      </View>
      <View style={(S.flex.one, S.flex.row)}>
        <Divider style={[{ backgroundColor: theme.colors.black0, width: 1 }, S.height.full]} />
        <VectorIcon iconName="book" size={ICON_SIZE} style={S.spaceHorizontal.px7} />
      </View>
    </View>
  );
};
