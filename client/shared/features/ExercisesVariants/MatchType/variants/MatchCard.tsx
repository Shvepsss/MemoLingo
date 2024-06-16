import React from 'react';

import { Button, Typography, VectorIcon, View } from 'app/shared/components/ui';
import { useAudioPlayer } from 'app/shared/hooks/player/useAudioPlayer';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';
import { capitalize } from 'app/shared/utils/text/capitalize';

import { Card } from '../components/Card';
import { MatchCardProps } from '../types';

const CONTAINER_GAP = 10;
const CONTAINER_PADDING = 10;
const BUTTON_SIZE = 45;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    cardContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: CONTAINER_PADDING,
      gap: CONTAINER_GAP,
    },
    commonContainer: {
      alignItems: 'center',
      gap: 10,
    },
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
  const wordToSelect = type === 'image' ? words[1] : words[2];
  const exerciseWords = words.slice(0, 5);
  const [selectedCardId, setSelectedCardId] = React.useState('');

  const handlePress = (id: string, text: string) => {
    setSelectedCardId(prevSelectedId => (prevSelectedId === id ? '' : id));
    handleChoice(text);
  };

  return (
    <View style={styles.commonContainer}>
      {type === 'text' ? (
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
      <View style={styles.cardContainer}>
        {exerciseWords.map(word => (
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
