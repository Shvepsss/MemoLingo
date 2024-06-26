import { IconLocal, Typography, View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

export const LessonMistakes = () => {
  return (
    <View style={[S.flex.one, S.alignFlex.bothCenter, S.gapAll.gx7]}>
      <Typography variant="h5" color="primary60" style={S.alignText.hCenter}>
        Let's correct the exercises you missed!
      </Typography>
      <IconLocal icon="help" size="70%" />
    </View>
  );
};
