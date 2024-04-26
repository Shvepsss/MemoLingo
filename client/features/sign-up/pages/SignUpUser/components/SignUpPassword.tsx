import { Typography, Button, FormController, TextInput, View } from 'app/shared/components/ui';

import { useSignUpForm } from '../hooks/useSignUpForm';
import { useSignUpContext } from '../provider';

export const SignUpPassword = () => {
  const { goNextStep } = useSignUpContext();
  const { values, errors } = useSignUpForm();

  return (
    <View>
      <Typography variant="extraLargeRegular">Create your password</Typography>
      <FormController
        name="password"
        label="password"
        render={inputProps => <TextInput {...inputProps} />}
      />

      <Button
        title="Continue"
        disabled={!values.password || !!errors.password}
        onPress={() => goNextStep()}
      />
    </View>
  );
};
