import { useTheme } from 'app/shared/hooks/styles';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
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

const dynamicStyles = getDynamicStyles(theme => {
  return {
    container: {
      backgroundColor: theme.colors.primary80,
    },
    divider: {
      backgroundColor: theme.colors.black0,
      width: 1,
    },
  };
});

export const SectionHeader = ({ title, details }: SectionHeaderProps) => {
  const theme = useTheme();
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={[styles.container, S.flex.row, S.spaceAll.px5, S.border.radx2Half]}>
      <View style={S.flex.two}>
        <Typography variant="h4" color="black0">
          {title}
        </Typography>
        <Typography variant="doubleExtraLargeRegular" color="black0">
          {details}
        </Typography>
      </View>
      <View style={(S.flex.one, S.flex.row)}>
        <Divider style={[styles.divider, S.height.full]} />
        <VectorIcon iconName="book" size={ICON_SIZE} style={S.spaceHorizontal.px7} />
      </View>
    </View>
  );
};
