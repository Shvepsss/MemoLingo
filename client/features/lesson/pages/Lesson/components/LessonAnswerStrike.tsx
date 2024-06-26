import { IconLocal, Typography, View } from 'app/shared/components/ui/index';
import * as S from 'app/shared/styles/@style-atoms';

export const LessonAnswerStrike = () => {
  return (
    <View style={[S.alignFlex.bothCenter, S.flex.one, S.gapAll.gx15]}>
      <Typography variant="h5" color="primary60">
        That's 5 in a row!
      </Typography>
      <IconLocal icon="party" size={300} />
    </View>
  );
};
