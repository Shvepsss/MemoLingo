import React from 'react';

import { type AuthLogicResponse } from './useAuthLogic';

export const AuthContext = React.createContext<AuthLogicResponse | null>(null);
