import { useFormikContext } from 'formik';

import { SignUpValues } from '../provider/SignUpProvider/types';

export const useSignUpForm = () => {
  return useFormikContext<SignUpValues>();
};
