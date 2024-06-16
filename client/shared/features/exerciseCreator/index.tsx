import { View } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { ExerciseContent } from './ExerciseContent';
import { ExerciseText } from './ExerciseText';
import { ExerciseTypes, ExerciseComponentProps } from './types';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    container: {
      flex: 1,
      gap: 15,
    },
  };
});

export const ExerciseCreator = <T extends ExerciseTypes>({
  exerciseType,
  variant,
  data,
}: ExerciseComponentProps<T>) => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.container}>
      <ExerciseText exerciseType={exerciseType} variant={variant} />
      <ExerciseContent exerciseType={exerciseType} variant={variant} data={data} />
    </View>
  );
};
