import { SvgXml } from 'react-native-svg';
import mistake from './svg/mistake.svg';
import mistakelist from './svg/mistakelist.svg';
import home from './svg/home.svg';
import gym from './svg/gym.svg';
import goals from './svg/goals.svg';
import league from './svg/league.svg';
import profile from './svg/profile.svg';

export const IMAGES_MAP = {
  mistake,
  mistakelist,
  home,
  gym,
  goals,
  league,
  profile,
};
export type IconLocalProps = {
  icon: keyof typeof IMAGES_MAP;
};

export const ImageIcon = ({ icon }: IconLocalProps) => {
  const xml = IMAGES_MAP[icon];
  return <SvgXml height={'100%'} width={'100%'} xml={xml} />;
};
