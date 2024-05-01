import { Typography, Button, FormController, TextInput, View } from 'app/shared/components/ui';

import { useSignUpForm } from '../hooks/useSignUpForm';
import { useSignUpContext } from '../provider';

export const SignUpAge = () => {
  const { goNextStep } = useSignUpContext();
  const { values, errors } = useSignUpForm();

  return (
    <View>
      <Typography variant="extraLargeRegular">How old are you?</Typography>

      <FormController name="age" label="Age" render={inputProps => <TextInput {...inputProps} />} />
      <Button
        title="Continue"
        disabled={!values.age || !!errors.age}
        onPress={() => goNextStep()}
      />
    </View>
  );
};
