import { Typography, Button, FormController, TextInput, View } from 'app/shared/components/ui';

import { useSignUpForm } from '../hooks/useSignUpForm';
import { useSignUpContext } from '../provider';

export const SignUpUserName = () => {
  const { goNextStep } = useSignUpContext();
  const { values, errors } = useSignUpForm();

  return (
    <View>
      <Typography variant="extraLargeRegular">Create your user name</Typography>
      <FormController
        name="name"
        label="Name"
        render={inputProps => <TextInput {...inputProps} />}
      />

      <Button
        title="Continue"
        disabled={!values.name || !!errors.name}
        onPress={() => goNextStep()}
      />
    </View>
  );
};
