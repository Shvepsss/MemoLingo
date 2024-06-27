import React from 'react';

import { Button, Typography, VectorIcon, View } from 'app/shared/components/ui';
import { useAudioPlayer } from 'app/shared/hooks/player/useAudioPlayer';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';
import { capitalize } from 'app/shared/utils/text/capitalize';

import { Card } from '../components/Card';
import { CARD_TYPE, MatchCardProps } from '../types';

const BUTTON_SIZE = 45;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    audioButton: {
      backgroundColor: theme.colors.black0,
      width: BUTTON_SIZE,
      height: BUTTON_SIZE,
      shadowOpacity: 0,
    },
  };
});

export const MatchCard = ({ words, type, handleChoice }: MatchCardProps) => {
  const styles = useDynamicStyles(dynamicStylesInput);
  const { handlePlayPause } = useAudioPlayer();
  const wordToSelect = type === CARD_TYPE.image ? words[1] : words[2];
  const [selectedCardId, setSelectedCardId] = React.useState<string | null>(null);

  const handlePress = (id: string, text: string) => {
    setSelectedCardId(prevSelectedId => (prevSelectedId === id ? null : id));
    handleChoice(text);
  };

  return (
    <View style={[S.alignFlex.aCenter, S.gapAll.gx5]}>
      {type === CARD_TYPE.text ? (
        <Button
          title=""
          onPress={() => {
            handlePlayPause(wordToSelect.audio);
          }}
          style={styles.audioButton}
          left={<VectorIcon iconName="audio" size={BUTTON_SIZE} color="primary60" />}
        />
      ) : (
        <Typography variant="doubleExtraLargeRegular">
          {capitalize(wordToSelect.translation)}
        </Typography>
      )}
      <View style={[S.flex.row, S.alignFlex.jCenter, S.flex.wrap, S.spaceAll.px5, S.gapAll.gx5]}>
        {words.map(word => (
          <Card
            isSelected={selectedCardId === word.id}
            key={word.id}
            id={word.id}
            image={word.image}
            text={word.original}
            type={type}
            onPress={handlePress}
          />
        ))}
      </View>
    </View>
  );
};
