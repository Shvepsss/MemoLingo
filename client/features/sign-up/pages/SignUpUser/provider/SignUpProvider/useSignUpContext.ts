import React from 'react';

import { SignUpContext } from './SignUpContext';

export const useSignUpContext = () => {
  const context = React.useContext(SignUpContext);

  return context;
};
