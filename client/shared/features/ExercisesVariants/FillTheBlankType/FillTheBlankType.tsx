import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';
import { View } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { FillTheBlankProps } from './types';
import { AudioFillTheBlank, TextFillTheBlank } from './variants';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    container: {
      flex: 1,
      gap: 10,
    },
  };
});

export const FillTheBlankType = ({ type, data }: FillTheBlankProps) => {
  const { handleAnswerChoice } = useLessonContext();
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.container}>
      {type === 'audio' ? (
        <AudioFillTheBlank data={data} handleAnswer={handleAnswerChoice} />
      ) : (
        <TextFillTheBlank data={data} handleAnswer={handleAnswerChoice} />
      )}
    </View>
  );
};
