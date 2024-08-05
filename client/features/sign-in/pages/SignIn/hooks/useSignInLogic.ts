import React from 'react';

import { APP_URL } from 'app/shared/constants/url';
import { useRouter } from 'app/shared/hooks/navigation';
import { useAuth } from 'app/shared/hooks/providers/useAuth';

type SignInProps = {
  email: string;
  password: string;
};

export const INITIAL_FORM_VALUES = { email: '', password: '' } satisfies SignInProps;

export const useSignInLogic = () => {
  const [error, setError] = React.useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  const onSubmit = async (values: SignInProps) => {
    try {
      const authResponse = await login(values);
      router.navigate(APP_URL.public.main.index);
      return authResponse;
    } catch (err) {
      if (err instanceof Error) {
        console.error('Authorization error:', err);
        setError(err.message);
      }
    }
  };

  return { onSubmit, error };
};
