import { Button, Typography, VectorIcon, View } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

import { ANSWER_COLOR, FEEDBACK_TEXT, ICON_VARIANT } from './constants';
import { ExerciseFeedbackProps, EXERCISE_FEEDBACK_TYPES } from './types';

const ICON_SIZE = 25;

const dynamicStylesInput = getDynamicStylesInput(() => ({
  container: {
    backgroundColor: 'transperent',
  },
}));

export const ExerciseFeedback = ({ type, goToNextStep, details }: ExerciseFeedbackProps) => {
  const textColor = type === EXERCISE_FEEDBACK_TYPES[type] ? 'primary100' : 'error100';
  const styles = useDynamicStyles(dynamicStylesInput);
  const handlePress = goToNextStep;

  return (
    <View style={[S.spaceAll.px10, S.gapAll.gx10, S.flex.one, styles.container]}>
      <View style={[S.alignFlex.aCenter, S.alignFlex.jSpaceBetween, S.flex.row, S.flex.one]}>
        <View style={[S.alignFlex.aCenter, S.gapAll.gx3, S.flex.row]}>
          <VectorIcon iconName={ICON_VARIANT[type]} size={ICON_SIZE} color={ANSWER_COLOR[type]} />
          <Typography variant="extraLargeRegular" color={textColor}>
            {FEEDBACK_TEXT[type]}
          </Typography>
        </View>
        <VectorIcon iconName="flagShtock" size={ICON_SIZE} color={ANSWER_COLOR[type]} />
      </View>
      {details ? (
        <View style={S.gapAll.gx3}>
          <Typography variant="mediumTextRegular" color={textColor}>
            Correct answer:
          </Typography>
          <Typography variant="mediumTextMedium" color={textColor}>
            {details}
          </Typography>
        </View>
      ) : null}

      <Button title="Continue" onPress={handlePress} backgroundColor={ANSWER_COLOR[type]} />
    </View>
  );
};
