import { View, VectorIcon } from 'app/shared/components/ui/index';
import { useTheme } from 'app/shared/hooks/styles';
import * as S from 'app/shared/styles/@style-atoms';

const ICON_SIZE = 40;
const BUTTON_SIZE = 70;

export const SectionItem = () => {
  const theme = useTheme();
  return (
    <View
      style={[
        S.alignFlex.bothCenter,
        S.border.radx11,
        S.spaceAll.mx5,
        {
          backgroundColor: theme.colors.primary60,
          width: BUTTON_SIZE,
          height: BUTTON_SIZE,
          shadowColor: theme.colors.primary100,
          shadowOffset: { width: 0, height: 7 },
          shadowOpacity: 1,
          shadowRadius: 2,
        },
      ]}
    >
      <VectorIcon iconName="star" color="black0" size={ICON_SIZE} />
    </View>
  );
};
