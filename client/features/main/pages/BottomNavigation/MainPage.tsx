import { GoalsPage } from 'app/features/goals/pages/Goals';
import { GymPage } from 'app/features/gym/pages/Gym';
import { HomePage } from 'app/features/home/pages/Home';
import { LeaguePage } from 'app/features/league/pages/League';
import { ProfilePage } from 'app/features/profile/pages/Profile';
import { APP_URL } from 'app/shared/constants/url';
import { BottomNavigationProps } from 'app/shared/features/bottom-navigation';
import { BottomNavigation } from 'app/shared/features/bottom-navigation/BottomNavigation';

const ROUTES = [
  {
    component: HomePage,
    url: APP_URL.public.main.home,
    icon: 'home',
  },
  {
    component: GoalsPage,
    url: APP_URL.public.main.goals,
    icon: 'goals',
  },
  {
    component: GymPage,
    url: APP_URL.public.main.gym,
    icon: 'gym',
  },
  {
    component: LeaguePage,
    url: APP_URL.public.main.league,
    icon: 'league',
  },
  {
    component: ProfilePage,
    url: APP_URL.public.main.profile,
    icon: 'profile',
  },
] satisfies BottomNavigationProps['routes'];
export const MainPage = () => {
  return <BottomNavigation routes={ROUTES} />;
};
