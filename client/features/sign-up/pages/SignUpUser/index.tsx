import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { Form } from 'app/shared/components/ui/Form';
import { APP_URL } from 'app/shared/constants/url';
import { RegistrationShema } from 'app/shared/utils/validation';

import { SignUpAge } from './components/SignUpAge';
import { SignUpEmail } from './components/SignUpEmail';
import { SignUpFinish } from './components/SignUpFinish';
import { SignUpPassword } from './components/SignUpPassword';
import { SignUpUserName } from './components/SignUpUserName';
import { INITIAL_FORM_VALUES, useSignUpLogic } from './hooks/useSignUpLogic';
import { SignUpProvider, useSignUpContext } from './provider';
import { SIGN_UP_STEPS } from './provider/SignUpProvider/constants';
import { SignUpHeader } from './provider/SignUpProvider/SignUpHeader';

const SignUpContent = () => {
  const { step } = useSignUpContext();

  switch (step) {
    case SIGN_UP_STEPS.age: {
      return <SignUpAge />;
    }
    case SIGN_UP_STEPS.email: {
      return <SignUpEmail />;
    }

    case SIGN_UP_STEPS.name: {
      return <SignUpUserName />;
    }
    case SIGN_UP_STEPS.password: {
      return <SignUpPassword />;
    }
    case SIGN_UP_STEPS.finish: {
      return <SignUpFinish />;
    }
  }
};

export const SignUpUser = () => {
  const { onSubmit } = useSignUpLogic();

  return (
    <Form
      initialValues={INITIAL_FORM_VALUES}
      onSubmit={onSubmit}
      validationSchema={RegistrationShema}
    >
      {({ handleSubmit }) => (
        <SignUpProvider handleSubmit={handleSubmit}>
          <MainLayout isScrollable={false} header={<SignUpHeader />}>
            <SignUpContent />
          </MainLayout>
        </SignUpProvider>
      )}
    </Form>
  );
};

SignUpUser.APP_URL = APP_URL.public.signUp.profile;
