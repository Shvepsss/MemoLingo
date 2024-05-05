import { Typography, Button, IconLocal, View } from 'app/shared/components/ui';
import { APP_URL } from 'app/shared/constants/url';
import { useRouter } from 'app/shared/hooks/navigation';
import * as S from 'app/shared/styles/@style-atoms';

import { useSignUpForm } from '../hooks/useSignUpForm';

export const SignUpFinish = () => {
  const { values } = useSignUpForm();
  const router = useRouter();
  return (
    <View style={{ ...S.alignFlex.bothCenter, gap: 20, ...S.flex.one }}>
      <IconLocal icon="handshake" size={200} />
      <Typography variant="extraLargeMedium">Welcome, {values.name}!</Typography>
      <Typography variant="smallRegular" color="black60">
        Your profile has been created. Enjoy your learning!
      </Typography>
      <Button title="Continue" onPress={() => router.navigate(APP_URL.public.main.index)} />
    </View>
  );
};
