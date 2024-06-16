import { ViewProps } from 'app/shared/components/ui/View';

export type MainLayoutContentProps = {
  children: React.ReactNode;
  isScrollable: boolean;
};

type styleProp = ViewProps['style'];

export type MainLayoutHeaderProps = {
  headerTitle?: string;
  header?: React.ReactNode;
  headerStyle?: styleProp;
};

export type MainLayoutProps = MainLayoutHeaderProps &
  MainLayoutContentProps & {
    footer?: React.ReactNode;
  };

export type MainLayoutFooterProps = Pick<MainLayoutProps, 'footer'>;
