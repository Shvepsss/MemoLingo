import { SvgXml } from 'react-native-svg';

import * as S from 'app/shared/styles/@style-atoms';

import { View } from '../View';

import equilizer from './svg/equilizer.svg';
import goals from './svg/goals.svg';
import gym from './svg/gym.svg';
import handshake from './svg/handshake.svg';
import help from './svg/help.svg';
import home from './svg/home.svg';
import league from './svg/league.svg';
import loader from './svg/loader.svg';
import mascotte from './svg/mascotte.svg';
import mascotteAudio from './svg/mascotteAudio.svg';
import mascotteQuestion from './svg/mascotteQuestion.svg';
import mistake from './svg/mistake.svg';
import mistakelist from './svg/mistakelist.svg';
import party from './svg/party.svg';
import profile from './svg/profile.svg';
import welcome from './svg/welcome.svg';

export const IMAGES_MAP = {
  mistake,
  mistakelist,
  home,
  gym,
  goals,
  league,
  profile,
  welcome,
  handshake,
  mascotte,
  mascotteAudio,
  mascotteQuestion,
  equilizer,
  loader,
  party,
  help,
};
export type IconLocalProps = {
  icon: keyof typeof IMAGES_MAP;
  size?: number;
};

export const IconLocal = ({ icon, size }: IconLocalProps) => {
  const xml = IMAGES_MAP[icon];
  return (
    <View style={{ width: size, height: size, ...S.alignFlex.bothCenter }}>
      <SvgXml height="100%" width="100%" xml={xml} />
    </View>
  );
};
