import { IconLocal, Typography, View } from 'app/shared/components/ui/index';

export const LessonAnswerStrike = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Typography variant="h5" color="primary60">
        That's 5 in a row!
      </Typography>
      <IconLocal icon="party" size="100%" />
    </View>
  );
};
