import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { APP_URL } from 'app/shared/constants/url';
import { BottomSheetModal } from 'app/shared/features/bottom-modal';
import { useBottomSheetModal } from 'app/shared/features/bottom-modal/useBottomSheetModal';
import { ExerciseCreator } from 'app/shared/features/exerciseCreator';
import { useTheme } from 'app/shared/hooks/styles';

import { Loader, LessonSatistic } from './components';
import { ExerciseFeedback } from './components/ExerciseFeedback';
import { LessonAnswerStrike } from './components/LessonAnswerStrike';
import { LessonFooter } from './components/LessonFooter';
import { LessonHeader } from './components/LessonHeader';
import { LessonMistakes } from './components/LessonMistakes';
import { LessonProvider, useLessonContext } from './provider';
import { exerciseSteps, introSteps } from './provider/LessonProvider/types';

const isIntroStep = (step: any): step is introSteps => {
  return (
    step.type === 'start' ||
    step.type === 'finish' ||
    step.type === 'mistake' ||
    step.type === 'row'
  );
};

const LessonContent = () => {
  const { step, steps } = useLessonContext();

  if (isIntroStep(step)) {
    switch (step.type) {
      case 'start':
        return <Loader />;
      case 'finish':
        return <LessonSatistic />;
      case 'mistake':
        return <LessonMistakes />;
      case 'row':
        return <LessonAnswerStrike />;
      default:
        return null;
    }
  } else {
    const exerciseStep = step as exerciseSteps;
    console.log(
      steps?.map(step => ({
        id: step.id,
        type: step.type,
        completed: step.completed,
      })),
    );

    return (
      <ExerciseCreator
        exerciseType={exerciseStep.type}
        variant={exerciseStep.variant}
        data={exerciseStep.data}
      />
    );
  }
};

const LessonContentCombined = () => {
  const theme = useTheme();
  const { openBottomSheet, closeBottomSheet, bottomSheetModalRef } = useBottomSheetModal({
    initIsOpen: false,
  });
  const { goToNextStep, progress, isAnswerCorrect, step, statistic } = useLessonContext();
  const modalColor = isAnswerCorrect ? theme.colors.primary40 : theme.colors.error40;
  const exerciseStep = step as exerciseSteps;
  // console.log(statistic);
  return (
    <MainLayout
      isScrollable={false}
      header={<LessonHeader progress={progress} />}
      footer={<LessonFooter onPress={openBottomSheet} />}
    >
      <LessonContent />

      <BottomSheetModal
        backgroundStyle={{ backgroundColor: modalColor }}
        index={0}
        ref={bottomSheetModalRef}
        enableDismissOnClose
        enablePanDownToClose
        withOverlay={false}
      >
        <ExerciseFeedback
          type={isAnswerCorrect ? 'correct' : 'incorrect'}
          goToNextStep={() => {
            goToNextStep();
            closeBottomSheet();
          }}
          details={isAnswerCorrect ? undefined : exerciseStep.answer}
        />
      </BottomSheetModal>
    </MainLayout>
  );
};

export const LessonPage = () => {
  return (
    <LessonProvider>
      <LessonContentCombined />
    </LessonProvider>
  );
};

LessonPage.APP_URL = APP_URL.private.lesson.index;
