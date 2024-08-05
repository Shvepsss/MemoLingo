import { Image, TouchableOpacity } from 'react-native';

import { Typography } from 'app/shared/components/ui';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';
import { capitalize } from 'app/shared/utils/text/capitalize';

import { CARD_TYPE, CardProps } from '../types';

const CARD_SIZE = 150;
const IMAGE_SIZE = 120;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    cardUnselected: {
      minWidth: CARD_SIZE,
      minHeight: CARD_SIZE,
      borderColor: theme.colors.primary40,
    },
    cardSelected: {
      minWidth: CARD_SIZE,
      minHeight: CARD_SIZE,
      borderColor: theme.colors.primary60,
    },
    image: {
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
    },
  };
});

export const Card = ({ image, text, type, onPress, isSelected, id }: CardProps) => {
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <TouchableOpacity
      style={
        isSelected
          ? [
              S.alignFlex.bothCenter,
              S.border.wid1,
              S.gapAll.gx5,
              S.border.radx4,
              S.spaceAll.px7,
              styles.cardSelected,
            ]
          : [
              S.alignFlex.bothCenter,
              S.border.wid1,
              S.gapAll.gx5,
              S.border.radx4,
              S.spaceAll.px7,
              styles.cardUnselected,
            ]
      }
      onPress={() => {
        onPress(id, text);
      }}
    >
      {type === CARD_TYPE.image ? (
        <Image source={{ uri: image }} style={[S.border.rad5, styles.image]} />
      ) : null}
      <Typography variant="doubleExtraLargeMedium">{capitalize(text)}</Typography>
    </TouchableOpacity>
  );
};
