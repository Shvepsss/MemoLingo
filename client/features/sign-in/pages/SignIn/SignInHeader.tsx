import { IconButton } from 'app/shared/components/ui';
import { useRouter } from 'app/shared/hooks/navigation';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

const BACK_ICON_SIZE = 15;
const BUTTON_SIZE = 30;

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    closeButton: {
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      backgroundColor: theme.colors.black0,
    },
  };
});

export const SignInHeader = () => {
  const styles = useDynamicStyles(dynamicStyles);
  const router = useRouter();
  return (
    <IconButton
      iconName="back"
      color="primary60"
      size={BACK_ICON_SIZE}
      onPress={router.goBack}
      style={[S.border.radx2Half, styles.closeButton]}
    />
  );
};
