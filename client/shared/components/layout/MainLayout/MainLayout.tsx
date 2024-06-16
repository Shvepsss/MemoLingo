import React from 'react';

import { View } from 'app/shared/components/ui';
import { getDynamicStylesInput, useDynamicStyles } from 'app/shared/hooks/styles/useDynamicStyles';

import { MainLayoutContentWrapper } from './components/MainLayoutContentWrapper';
import { MainLayoutFooterWrapper } from './components/MainLayoutFooterWrapper';
import { MainLayoutHeaderWrapper } from './components/MainLayoutHeaderWrapper';
import { MainLayoutProps } from './types';

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    container: {
      flex: 1,
      backgroundColor: theme.colors.black0,
    },
  };
});

const MainLayoutBase = ({
  headerTitle,
  children,
  header,
  footer,
  isScrollable,
  headerStyle,
}: MainLayoutProps) => {
  const styles = useDynamicStyles(dynamicStylesInput);
  return (
    <View style={styles.container}>
      <MainLayoutHeaderWrapper
        header={header}
        headerTitle={headerTitle}
        headerStyle={headerStyle}
      />
      <MainLayoutContentWrapper isScrollable={isScrollable}>{children}</MainLayoutContentWrapper>
      <MainLayoutFooterWrapper footer={footer} />
    </View>
  );
};

export const MainLayout = React.memo(MainLayoutBase);
