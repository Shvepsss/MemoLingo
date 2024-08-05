import React from 'react';

import { View } from 'app/shared/components/ui';
import * as S from 'app/shared/styles/@style-atoms';

import { MainLayoutContentWrapper } from './components/MainLayoutContentWrapper';
import { MainLayoutFooterWrapper } from './components/MainLayoutFooterWrapper';
import { MainLayoutHeaderWrapper } from './components/MainLayoutHeaderWrapper';
import { MainLayoutProps } from './types';

const MainLayoutBase = ({
  headerTitle,
  children,
  header,
  footer,
  isScrollable,
  headerStyle,
}: MainLayoutProps) => {
  return (
    <View style={S.flex.one}>
      <MainLayoutHeaderWrapper
        header={header}
        headerTitle={headerTitle}
        headerStyle={headerStyle}
      />
      <MainLayoutContentWrapper isScrollable={isScrollable}>{children}</MainLayoutContentWrapper>
      <MainLayoutFooterWrapper>{footer}</MainLayoutFooterWrapper>
    </View>
  );
};

export const MainLayout = React.memo(MainLayoutBase);
