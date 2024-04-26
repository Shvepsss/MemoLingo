import React from 'react';

import { SIGN_UP_PROGRESS, SIGN_UP_STEPS_QUEUE } from './constants';
import { SignUpContext, SIGN_UP_CONTEXT_DEFAULT_VALUE } from './SignUpContext';
import { SignUpContextType, SignUpProviderProps } from './types';

export const SignUpProvider = ({ children, handleSubmit }: SignUpProviderProps) => {
  const [signUpStep, setSignUpStep] = React.useState<SignUpContextType['step']>(
    SIGN_UP_CONTEXT_DEFAULT_VALUE.step,
  );
  const currentStepIndex = SIGN_UP_STEPS_QUEUE.indexOf(signUpStep);
  const nextStep = SIGN_UP_STEPS_QUEUE[currentStepIndex + 1];
  const prevStep = SIGN_UP_STEPS_QUEUE[currentStepIndex - 1];

  const goNextStep = () => {
    if (nextStep === 'finish') {
      handleSubmit();
      setSignUpStep(nextStep);
    } else {
      setSignUpStep(nextStep);
    }
  };

  const goPreviousStep = () => {
    if (currentStepIndex > 0) {
      setSignUpStep(prevStep);
    }
  };

  const contextValue = React.useMemo<SignUpContextType>(() => {
    return {
      step: signUpStep,
      setSignUpStep,
      progress: SIGN_UP_PROGRESS[signUpStep],
      goNextStep,
      goPreviousStep,
      onSubmit: handleSubmit,
    };
  }, [signUpStep, handleSubmit]);

  return <SignUpContext.Provider value={contextValue}>{children}</SignUpContext.Provider>;
};
