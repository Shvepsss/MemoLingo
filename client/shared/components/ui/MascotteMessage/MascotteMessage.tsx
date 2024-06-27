import { IconLocal, Typography, View, AudioButtons } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';
import * as S from 'app/shared/styles/@style-atoms';

import { MASCOTTE_ICONS, MASCOTTE_TYPES, SIZE } from './constants';
import { type MascotteMessageProps } from './types';

export const MascotteMessage = ({ mascotteVariant, data, sizeVariant }: MascotteMessageProps) => {
  const icon = MASCOTTE_ICONS[mascotteVariant];
  const MESSAGE_PADDING = mascotteVariant === MASCOTTE_TYPES.audio ? 0 : 15;

  const dynamicStylesInput = getDynamicStylesInput(theme => {
    return {
      messageContainer: {
        padding: MESSAGE_PADDING,
        backgroundColor: theme.colors.black0,
        borderColor: theme.colors.primary60,
      },
    };
  });
  const styles = useDynamicStyles(dynamicStylesInput);

  return (
    <View style={[S.flex.row, S.alignFlex.aCenter]}>
      <IconLocal icon={icon} size={SIZE[sizeVariant]} />
      <View
        style={[
          S.flex.row,
          S.alignFlex.bothCenter,
          S.flex.one,
          S.flex.wrap,
          S.gapAll.gx3,
          S.border.wid1,
          S.border.radx2Half,
          styles.messageContainer,
        ]}
      >
        {mascotteVariant === MASCOTTE_TYPES.audio ? (
          <AudioButtons url={data} />
        ) : (
          <Typography variant="smallRegular" color="black100">
            {data}
          </Typography>
        )}
      </View>
    </View>
  );
};
