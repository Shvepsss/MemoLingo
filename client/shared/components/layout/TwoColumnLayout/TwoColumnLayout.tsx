import React from 'react';

import { View } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { ColumnWrapper } from './components/ColumnWrapper';
import { type ColumnLayoutProps } from './types';

const dynamicStyles = getDynamicStylesInput(() => {
  return {
    twoColumnContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: 15,
    },
  };
});

const ColumnLayoutBase = ({ column1, column2, column1Props, column2Props }: ColumnLayoutProps) => {
  const styles = useDynamicStyles(dynamicStyles);
  return (
    <View style={styles.twoColumnContainer}>
      <ColumnWrapper style={column1Props}>{column1}</ColumnWrapper>
      <ColumnWrapper style={column2Props}>{column2}</ColumnWrapper>
    </View>
  );
};

export const TwoColumnLayout = React.memo(ColumnLayoutBase);
