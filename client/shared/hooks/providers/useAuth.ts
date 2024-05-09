import React from 'react';

import { AuthContext } from 'app/shared/providers/auth/';

export const useAuth = () => {
  const data = React.useContext(AuthContext);

  if (!data) {
    throw new Error('No Auth provider');
  }

  return data;
};
