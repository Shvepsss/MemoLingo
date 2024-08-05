import { MainLayout } from 'app/shared/components/layout/MainLayout';
import {
  Typography,
  FormController,
  Form,
  TextInput,
  View,
  Button,
} from 'app/shared/components/ui';
import { APP_URL } from 'app/shared/constants/url';
import * as S from 'app/shared/styles/@style-atoms';
import { SignInSchema } from 'app/shared/utils/validation';

import { INITIAL_FORM_VALUES, useSignInLogic } from './hooks/useSignInLogic';
import { SignInHeader } from './SignInHeader';

export const SignInPage = () => {
  const { onSubmit, error } = useSignInLogic();
  return (
    <Form onSubmit={onSubmit} initialValues={INITIAL_FORM_VALUES} validationSchema={SignInSchema}>
      {({ handleSubmit, values, errors }) => {
        const isSignInFooterDisabled =
          !values.email || !values.password || !!Object.keys(errors).length;
        return (
          <MainLayout
            isScrollable={false}
            header={<SignInHeader />}
            footer={
              <Button
                title="Sign in"
                onPress={handleSubmit}
                disabled={isSignInFooterDisabled}
                radius="square"
              />
            }
          >
            <View style={[S.flex.one, S.alignFlex.aCenter, S.gapAll.gx5]}>
              <Typography variant="h5" color="primary60">
                Enter your details
              </Typography>
              <View style={S.width.full}>
                <FormController
                  name="email"
                  label="Email"
                  render={inputProps => <TextInput {...inputProps} />}
                />
                <FormController
                  name="password"
                  label="Password"
                  render={inputProps => <TextInput {...inputProps} />}
                />
                {!!error && (
                  <Typography variant="extraLargeMedium" color="error80">
                    {error}
                  </Typography>
                )}
              </View>
              <Typography variant="largeMedium" color="primary100">
                Forgot my password
              </Typography>
            </View>
          </MainLayout>
        );
      }}
    </Form>
  );
};

SignInPage.APP_URL = APP_URL.public.signIn.index;
