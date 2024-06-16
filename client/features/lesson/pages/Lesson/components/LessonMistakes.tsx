import { IconLocal, Typography, View } from 'app/shared/components/ui';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';

const dynamicStylesInput = getDynamicStylesInput(() => {
  return {
    container: {
      flex: 1,
      justifyContent: 'center',

      alignItems: 'center',
      gap: 15,
    },
  };
});

export const LessonMistakes = () => {
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <View style={styles.container}>
      <Typography variant="h5" color="primary60" style={{ textAlign: 'center' }}>
        Let's correct the exercises you missed!
      </Typography>
      <IconLocal icon="help" size="70%" />
    </View>
  );
};
