import React from 'react';

import { SIGN_UP_STEPS } from './constants';
import { SignUpContextType } from './types';

export const SIGN_UP_CONTEXT_DEFAULT_VALUE = {
  step: SIGN_UP_STEPS.age,
} satisfies SignUpContextType;

export const SignUpContext = React.createContext<SignUpContextType>(SIGN_UP_CONTEXT_DEFAULT_VALUE);
