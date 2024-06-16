import { VectorIcon, Button, View } from 'app/shared/components/ui';
import { ProgressBar } from 'app/shared/components/ui/ProgressBar';
import { useRouter } from 'app/shared/hooks/navigation';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

const BUTTON_SIZE = 30;

const dynamicStylesInput = getDynamicStylesInput(() => {
  return {
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
  };
});

type LessonHeaderProps = {
  progress: number;
};

export const LessonHeader = ({ progress }: LessonHeaderProps) => {
  const router = useRouter();
  const styles = useDynamicStyles(dynamicStylesInput);
  return (
    <View style={styles.container}>
      <Button
        left={<VectorIcon iconName="close" color="primary60" size={BUTTON_SIZE} />}
        title=""
        onPress={() => {
          router.goBack();
        }}
        backgroundColor="black0"
        style={{ height: BUTTON_SIZE, width: BUTTON_SIZE }}
        radius="square"
      />
      <ProgressBar progress={progress} />
    </View>
  );
};
