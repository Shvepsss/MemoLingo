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

const CONTAINER_PADDING = 10;
const CONTAINER_RADIUS = 10;
const ICON_SIZE = 50;
const ICON_PADDING = 15;
export const SectionHeader = ({ title, details }: SectionHeaderProps) => {
  const theme = useTheme();
  return (
    <View
      style={{
        backgroundColor: theme.colors.primary80,
        borderRadius: CONTAINER_RADIUS,
        padding: CONTAINER_PADDING,
        flexDirection: 'row',
      }}
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
        <Divider style={{ height: '100%', width: 1, backgroundColor: theme.colors.black0 }} />
        <VectorIcon iconName="book" size={ICON_SIZE} style={{ paddingHorizontal: ICON_PADDING }} />
      </View>
    </View>
  );
};
