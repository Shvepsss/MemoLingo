import { TouchableOpacity } from 'react-native';

import { View, Typography } from 'app/shared/components/ui/index';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { WordBlockProps } from '../types/index';

const dynamicStyles = getDynamicStylesInput(theme => {
  return {
    container: {
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: theme.colors.primary60,
      zIndex: 2,
    },
    content: {
      flexDirection: 'row',
    },
  };
});

export const WordBlock = ({ word, onSelectWord }: WordBlockProps) => {
  const styles = useDynamicStyles(dynamicStyles);

  return (
    <TouchableOpacity
      key={word.id}
      onPress={() => onSelectWord(word.id, word.text)}
      style={styles.container}
    >
      <View style={styles.content}>
        <Typography variant="mediumTextRegular" color="black100">
          {word.text}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};
