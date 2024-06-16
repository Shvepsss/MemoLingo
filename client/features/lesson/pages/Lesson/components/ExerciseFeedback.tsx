import { Button, Typography, VectorIcon, View } from 'app/shared/components/ui';
import { ICON_NAMES } from 'app/shared/constants/iconNames';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import { MD3Colors } from 'app/shared/providers/theme';

export type ExerciseFeedbackProps = {
  type: 'correct' | 'incorrect';
  details?: string;
  goToNextStep: () => any;
};

export const ExerciseFeedback = ({ type, goToNextStep, details }: ExerciseFeedbackProps) => {
  const dynamicStylesInput = getDynamicStylesInput(() => ({
    container: {
      padding: 20,
      backgroundColor: 'transperent',
      gap: 20,
      flex: 1,
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
  }));
  const textColor = type === 'correct' ? 'primary100' : 'error100';
  const styles = useDynamicStyles(dynamicStylesInput);

  const handlePress = () => {
    goToNextStep();
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.title}>
          <VectorIcon iconName={ICON_VARIANT[type]} size={25} color={ANSWER_COLOR[type]} />
          <Typography variant="extraLargeRegular" color={textColor}>
            {FEEDBACK_TEXT[type]}
          </Typography>
        </View>
        <VectorIcon iconName="flagShtock" size={25} color={ANSWER_COLOR[type]} />
      </View>
      {details ? (
        <View style={{ gap: 5 }}>
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

const FEEDBACK_TEXT = {
  correct: 'Nicely Done !',
  incorrect: 'Incorrect !',
};

const ICON_VARIANT: Record<ExerciseFeedbackProps['type'], keyof typeof ICON_NAMES> = {
  correct: 'circleDone',
  incorrect: 'circleClose',
};
const ANSWER_COLOR: Record<ExerciseFeedbackProps['type'], keyof MD3Colors> = {
  correct: 'primary60',
  incorrect: 'error80',
};
