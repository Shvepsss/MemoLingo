import { ViewProps } from '../../ui/View';

export type ColumnLayoutProps = {
  column1: React.ReactNode;
  column2: React.ReactNode;
  column1Props?: ViewProps['style'];
  column2Props?: ViewProps['style'];
};

export type ColumnProps = {
  children: React.ReactNode;
  style?: ViewProps['style'];
};
