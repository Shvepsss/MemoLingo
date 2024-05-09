import { useAuth } from 'app/shared/hooks/providers/useAuth';

type SignUpProps = {
  email: string;
  password: string;
  name: string;
  age: string;
};

export const INITIAL_FORM_VALUES = {
  email: '',
  password: '',
  name: '',
  age: '',
} satisfies SignUpProps;

export const useSignUpLogic = () => {
  const { signUp } = useAuth();

  const onSubmit = async (values: SignUpProps) => {
    try {
      const authResponse = await signUp(values);
      return authResponse;
    } catch (error) {
      console.error('Authorization error:', error);
    }
  };

  return { onSubmit };
};
