import { Button } from 'app/shared/components/ui';

type SignInFooterProps = {
  handleSubmit: () => void;
  disabled: boolean;
};

export const SignInFooter = ({ handleSubmit, disabled }: SignInFooterProps) => {
  return <Button title="Sign in" onPress={handleSubmit} disabled={disabled} radius="square" />;
};
