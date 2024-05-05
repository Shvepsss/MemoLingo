import { IconLocalProps } from 'app/shared/components/ui/IconLocal';

export type BottomNavigationProps = {
  routes: { component: React.FC; url: string; icon: IconLocalProps['icon'] }[];
};
