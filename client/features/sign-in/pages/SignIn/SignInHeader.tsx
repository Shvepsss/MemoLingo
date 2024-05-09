import { Button, VectorIcon } from 'app/shared/components/ui';
import { useRouter } from 'app/shared/hooks/navigation';

export const SignInHeader = () => {
  const router = useRouter();
  return (
    <Button
      left={<VectorIcon iconName="back" color="primary60" size={15} />}
      title=""
      onPress={() => router.goBack()}
      backgroundColor="black0"
      style={{ height: 30, width: 30 }}
      radius="square"
    />
  );
};
