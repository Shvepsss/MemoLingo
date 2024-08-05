import { View, VectorIcon } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

const ICON_SIZE = 40;
const BUTTON_SIZE = 70;
const BUTTON_RADIUS = 22;

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    lessonButton: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      shadowColor: theme.colors.primary100,
      shadowOffset: { width: 0, height: 7 },
      shadowOpacity: 1,
      shadowRadius: 2,
      borderRadius: BUTTON_RADIUS,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
// Component not used right now , was created to check SectiolList behavior
export const SectionItem = () => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.lessonButton}>
      <VectorIcon iconName="star" color="black0" size={ICON_SIZE} />
    </View>
  );
};
