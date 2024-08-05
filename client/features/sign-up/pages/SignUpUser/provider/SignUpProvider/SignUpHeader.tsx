import { Button, VectorIcon, View, ProgressBar } from 'app/shared/components/ui';
import { useRouter } from 'app/shared/hooks/navigation';
import * as S from 'app/shared/styles/@style-atoms';

import { SIGN_UP_PROGRESS, SIGN_UP_STEPS } from './constants';
import { useSignUpContext } from './useSignUpContext';

const BUTTON_SIZE = 30;
const ICON_SIZE = 15;

export const SignUpHeader = () => {
  const { goPreviousStep, step } = useSignUpContext();
  const router = useRouter();
  const backFunction = () => {
    if (step === SIGN_UP_STEPS.age) {
      return () => router.goBack();
    } else {
      return () => goPreviousStep();
    }
  };

  const progress = SIGN_UP_PROGRESS[step];

  return step === SIGN_UP_STEPS.finish ? null : (
    <View style={[S.width.full, S.flex.row, S.alignFlex.aCenter, S.gapAll.gx5]}>
      <Button
        left={<VectorIcon iconName="back" color="primary60" size={ICON_SIZE} />}
        title=""
        onPress={backFunction()}
        backgroundColor="black0"
        style={{ height: BUTTON_SIZE, width: BUTTON_SIZE }}
        radius="square"
      />
      <ProgressBar progress={progress} />
    </View>
  );
};
