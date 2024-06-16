import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';
import { View } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { TranslateSentenceProps } from './types';
import { TranslateWithBlocks } from './variants/TranslateWithBlocks';
import { TranslateWithInput } from './variants/TranslateWithInput';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    exerciseContainer: {
      flex: 1,
      gap: 10,
    },
  };
});

export const TransalateType = ({ data, type }: TranslateSentenceProps) => {
  const { handleAnswerChoice } = useLessonContext();
  const styles = useDynamicStyles(dynamicStyles);

  return (
    <View style={styles.exerciseContainer}>
      {type === 'wordBlocks' ? (
        <TranslateWithBlocks data={data} handleAnswer={handleAnswerChoice} />
      ) : (
        <TranslateWithInput data={data} handleAnswer={handleAnswerChoice} />
      )}
    </View>
  );
};
