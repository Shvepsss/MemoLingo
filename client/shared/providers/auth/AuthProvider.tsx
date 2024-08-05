import React from 'react';

import { AuthContext } from './AuthContext';
import { useAuthLogic } from './useAuthLogic';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authLogic = useAuthLogic();

  return <AuthContext.Provider value={authLogic}>{children}</AuthContext.Provider>;
};
