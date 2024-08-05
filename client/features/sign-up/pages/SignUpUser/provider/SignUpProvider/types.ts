import { SignUpStep } from './constants';

export type SignUpValues = {
  email: string;
  password: string;
  age: number;
  name: string;
};

export type SignUpContextType = {
  step: SignUpStep;
  setSignUpStep: (newStep: SignUpStep) => void;
  progress: number;
  goNextStep: () => void;
  goPreviousStep: () => void;
  onSubmit: () => any;
};

export type SignUpProviderProps = {
  children: React.ReactNode;
  handleSubmit: () => void;
};
