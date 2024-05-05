export type MainLayoutContentProps = {
  children: React.ReactNode;
  isScrollable: boolean;
};

export type MainLayoutHeaderProps = {
  headerTitle?: string;
  header?: React.ReactNode;
};

export type MainLayoutProps = MainLayoutHeaderProps &
  MainLayoutContentProps & {
    footer?: React.ReactNode;
  };
