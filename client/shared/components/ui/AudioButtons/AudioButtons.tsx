import { Button } from 'app/shared/components/ui/Button';
import { Divider } from 'app/shared/components/ui/Divider';
import { View } from 'app/shared/components/ui/View';
import { useAudioPlayer } from 'app/shared/hooks/player/useAudioPlayer';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { VectorIcon } from '../VectorIcon';

const BORDER_RADIUS = 15;
const ICON_SIZE = 30;

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    container: {
      flex: 1,
      borderRadius: BORDER_RADIUS,
      flexDirection: 'row',
    },
    divider: {
      width: 1,
      height: 50,
      backgroundColor: theme.colors.primary60,
    },
    button: {
      flex: 1,
      backgroundColor: theme.colors.black0,
      borderRadius: BORDER_RADIUS,
      shadowOpacity: 0,
    },
  };
});
type AudioButtonsProps = {
  url: string;
};
export const AudioButtons = ({ url }: AudioButtonsProps) => {
  const styles = useDynamicStyles(dynamicStylesInput);
  const { handlePlayPause, handlePlaySlow } = useAudioPlayer();

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        left={<VectorIcon iconName="audio" size={ICON_SIZE} color="primary60" />}
        title=""
        onPress={() => {
          handlePlayPause(url);
        }}
      />
      <Divider style={styles.divider} />
      <Button
        title=""
        onPress={() => {
          handlePlaySlow(url);
        }}
        right={<VectorIcon iconName="turtle" size={ICON_SIZE} color="primary60" />}
        style={styles.button}
      />
    </View>
  );
};
