import { View, ScrollView } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { MainLayoutContentProps } from '../types';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    scrollContainer: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    container: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      flex: 1,
    },
  };
});

export const MainLayoutContentWrapper = ({ children, isScrollable }: MainLayoutContentProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  if (isScrollable) {
    return <ScrollView style={styles.scrollContainer}>{children}</ScrollView>;
  }

  return <View style={styles.container}>{children}</View>;
};
