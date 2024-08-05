import { Typography, Button, FormController, TextInput, View } from 'app/shared/components/ui';

import { useSignUpForm } from '../hooks/useSignUpForm';
import { useSignUpContext } from '../provider';

export const SignUpEmail = () => {
  const { goNextStep } = useSignUpContext();
  const { values, errors } = useSignUpForm();

  return (
    <View>
      <Typography variant="extraLargeRegular">What’s your email address?</Typography>
      <FormController
        name="email"
        label="Email"
        render={inputProps => <TextInput {...inputProps} />}
      />

      <Button title="Continue" disabled={!values.email || !!errors.email} onPress={goNextStep} />
    </View>
  );
};
