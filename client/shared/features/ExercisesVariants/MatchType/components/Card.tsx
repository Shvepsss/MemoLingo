import { Image, TouchableOpacity } from 'react-native';

import { Typography } from 'app/shared/components/ui';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';
import { capitalize } from 'app/shared/utils/text/capitalize';

import { CardProps } from '../types';

const CARD_PADDING = 15;
const RADIUS = 15;
const CARD_SIZE = 150;
const CONTENT_GAP = 10;
const IMAGE_SIZE = 120;
const IMAGE_RADISU = 5;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    cardUnselected: {
      minWidth: CARD_SIZE,
      minHeight: CARD_SIZE,
      padding: CARD_PADDING,
      borderRadius: RADIUS,
      borderWidth: 1,
      gap: CONTENT_GAP,
      borderColor: theme.colors.primary40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardSelected: {
      padding: CARD_PADDING,
      minWidth: CARD_SIZE,
      minHeight: CARD_SIZE,
      borderRadius: RADIUS,
      borderWidth: 1,
      gap: CONTENT_GAP,
      borderColor: theme.colors.primary60,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      borderRadius: IMAGE_RADISU,
    },
  };
});

export const Card = ({ image, text, type, onPress, isSelected, id }: CardProps) => {
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <TouchableOpacity
      style={isSelected ? styles.cardSelected : styles.cardUnselected}
      onPress={() => {
        onPress(id, text);
      }}
    >
      {type === 'image' ? <Image source={{ uri: image }} style={styles.image} /> : null}
      <Typography variant="doubleExtraLargeMedium">{capitalize(text)}</Typography>
    </TouchableOpacity>
  );
};
