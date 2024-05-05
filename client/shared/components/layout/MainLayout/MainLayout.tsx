import React from 'react';

import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutContentWrapper } from './components/MainLayoutContentWrapper';
import { MainLayoutHeader } from './components/MainLayoutHeader';
import { MainLayoutProps } from './types';

const MainLayoutBase = ({
  headerTitle,
  children,
  header,
  footer,
  isScrollable,
}: MainLayoutProps) => {
  return (
    <View style={S.flex.one}>
      <MainLayoutHeader header={header} headerTitle={headerTitle} />
      <MainLayoutContentWrapper isScrollable={isScrollable}>{children}</MainLayoutContentWrapper>
      {footer}
    </View>
  );
};

export const MainLayout = React.memo(MainLayoutBase);
