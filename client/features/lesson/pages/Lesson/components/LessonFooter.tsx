import { Button } from 'app/shared/components/ui';

import { useLessonContext } from '../provider';
import { useExerciseContext } from '../provider/ExerciseProvider/useExerciseContext';

type LessonFooterProps = {
  onPress: () => void;
};

export const LessonFooter = ({ onPress }: LessonFooterProps) => {
  const { handleAnswerSubmit, userAnswer } = useExerciseContext();
  const { checkpoint, exitCheckpoint } = useLessonContext();

  // OnPress is  used to open bottomSheetModal
  const handleStep = () => {
    handleAnswerSubmit();
    onPress();
  };

  const isDisabled = userAnswer === null || userAnswer === '';

  return checkpoint ? (
    <Button title="Continue" onPress={exitCheckpoint} />
  ) : (
    <Button title="Check Answer" onPress={handleStep} disabled={isDisabled} />
  );
};
