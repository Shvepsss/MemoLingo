import { IconLocal, Typography, View, AudioButtons } from 'app/shared/components/ui/index';
import { useTheme } from 'app/shared/hooks/styles';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { MASCOTTE_ICONS, SIZE } from './constants';
import { type MascotteMessageProps } from './types';

export const MascotteMessage = ({ mascotteVariant, data, sizeVariant }: MascotteMessageProps) => {
  const icon = MASCOTTE_ICONS[mascotteVariant];
  const theme = useTheme();

  const dynamicStylesInput = getDynamicStylesInput(() => {
    return {
      messageContainer: {
        flexWrap: 'wrap',
        flex: 1,
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        justifyContent: 'center',
        padding: mascotteVariant === 'audio' ? 0 : 15,
        alignItems: 'center',
        gap: 5,
        backgroundColor: theme.colors.black0,
        borderColor: theme.colors.primary60,
      },
      commonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    };
  });
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <View style={styles.commonContainer}>
      <IconLocal icon={icon} size={SIZE[sizeVariant]} />
      <View style={styles.messageContainer}>
        {mascotteVariant === 'audio' ? (
          <AudioButtons url={data} />
        ) : (
          <Typography
            variant="smallRegular"
            color="black100"
            style={{ color: theme.colors.black100 }}
          >
            {data}
          </Typography>
        )}
      </View>
    </View>
  );
};
