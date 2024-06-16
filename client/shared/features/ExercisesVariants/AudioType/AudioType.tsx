import { useLessonContext } from 'app/features/lesson/pages/Lesson/provider';
import { View } from 'app/shared/components/ui/index';
import { useAudioPlayer } from 'app/shared/hooks/player/useAudioPlayer';
import * as S from 'app/shared/styles/@style-atoms';

import { AudioTypeProps } from './types';
import { TypeWithInput, ChooseOption } from './variants';

export const AudioType = ({ type, data }: AudioTypeProps) => {
  const { handleAnswerChoice } = useLessonContext();
  const { handlePlayPause } = useAudioPlayer();
  return (
    <View style={S.flex.one}>
      {type === 'typeContent' ? (
        <TypeWithInput data={data} handleAnswerChoice={handleAnswerChoice} />
      ) : (
        <ChooseOption
          data={data}
          handleAnswerChoice={handleAnswerChoice}
          handlePlayer={handlePlayPause}
        />
      )}
    </View>
  );
};
