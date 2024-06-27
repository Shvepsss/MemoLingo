import React from 'react';

import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { ColumnWrapper } from './components/ColumnWrapper';
import { type ColumnLayoutProps } from './types';

const ColumnLayoutBase = ({ column1, column2, column1Props, column2Props }: ColumnLayoutProps) => {
  return (
    <View style={[S.flex.one, S.flex.row, S.gapAll.gx8]}>
      <ColumnWrapper style={column1Props}>{column1}</ColumnWrapper>
      <ColumnWrapper style={column2Props}>{column2}</ColumnWrapper>
    </View>
  );
};

export const TwoColumnLayout = React.memo(ColumnLayoutBase);
