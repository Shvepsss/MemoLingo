import { Button } from 'app/shared/components/ui';

import { useLessonContext } from '../provider';

type LessonFooterProps = {
  onPress: () => void;
};

export const LessonFooter = ({ onPress }: LessonFooterProps) => {
  const { handleAnswerSubmit, userAnswer } = useLessonContext();
  const handleStep = () => {
    handleAnswerSubmit();
    onPress();
  };

  const isDisabled = userAnswer === undefined || userAnswer === '';

  return <Button title="Check Answer" onPress={handleStep} disabled={isDisabled} />;
};
