import { View, IconButton } from 'app/shared/components/ui';
import { ProgressBar } from 'app/shared/components/ui/ProgressBar';
import { useRouter } from 'app/shared/hooks/navigation';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

type LessonHeaderProps = {
  progress: number;
};

const BUTTON_SIZE = 30;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    closeButton: {
      backgroundColor: theme.colors.black0,
      shadowColor: theme.colors.black80,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
  };
});

export const LessonHeader = ({ progress }: LessonHeaderProps) => {
  const router = useRouter();
  const styles = useDynamicStyles(dynamicStylesInput);
  return (
    <View style={[S.flex.row, S.alignFlex.aCenter, S.gapAll.gx5]}>
      <IconButton
        iconName="close"
        color="primary40"
        size={BUTTON_SIZE}
        onPress={router.goBack}
        style={[S.border.radx3, styles.closeButton]}
      />
      <ProgressBar progress={progress} />
    </View>
  );
};
