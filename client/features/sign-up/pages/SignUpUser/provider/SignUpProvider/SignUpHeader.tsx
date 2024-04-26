import { Button, VectorIcon, View } from 'app/shared/components/ui';
import { ProgressBar } from 'app/shared/components/ui/ProgressBar';
import { useRouter } from 'app/shared/hooks/navigation';

import { SIGN_UP_PROGRESS } from './constants';
import { useSignUpContext } from './useSignUpContext';

export const SignUpHeader = () => {
  const { goPreviousStep, step } = useSignUpContext();
  const router = useRouter();
  const backFunction = () => {
    if (step === 'age') {
      return () => router.goBack();
    } else {
      return () => goPreviousStep();
    }
  };

  const progress = SIGN_UP_PROGRESS[step];

  return step === 'finish' ? null : (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <Button
        left={<VectorIcon iconName="back" color="primary60" size={15} />}
        title=""
        onPress={backFunction()}
        backgroundColor="black0"
        style={{ height: 30, width: 30 }}
        radius="square"
      />
      <ProgressBar progress={progress} />
    </View>
  );
};
