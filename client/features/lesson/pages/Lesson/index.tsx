import { MainLayout } from 'app/shared/components/layout/MainLayout';
import { APP_URL } from 'app/shared/constants/url';
import { BottomSheetModal } from 'app/shared/features/bottom-modal';
import { useBottomSheetModal } from 'app/shared/features/bottom-modal/useBottomSheetModal';
import { ExerciseCreator } from 'app/shared/features/exerciseCreator';
import { useTheme } from 'app/shared/hooks/styles';

import { Loader, LessonSatistic } from './components';
import { ExerciseFeedback } from './components/ExerciseFeedBack/ExerciseFeedback';
import { EXERCISE_FEEDBACK_TYPES } from './components/ExerciseFeedBack/types';
import { LessonAnswerStrike } from './components/LessonAnswerStrike';
import { LessonFooter } from './components/LessonFooter';
import { LessonHeader } from './components/LessonHeader';
import { LessonMistakes } from './components/LessonMistakes';
import { LessonProvider, useLessonContext } from './provider';
import { ExerciseProvider } from './provider/ExerciseProvider/ExerciseProvider';
import { useExerciseContext } from './provider/ExerciseProvider/useExerciseContext';
import { CheckpointType, ExerciseStatus } from './provider/LessonProvider/types';

const ExerciseContent = () => {
  const { step: currentExercise } = useExerciseContext();

  if (currentExercise) {
    return (
      <ExerciseCreator
        exerciseType={currentExercise.content.type}
        variant={currentExercise.content.variant}
        data={currentExercise.content.data}
      />
    );
  }

  return null;
};

const CheckPoint = ({ checkpoint }: { checkpoint: CheckpointType }) => {
  if (checkpoint) {
    switch (checkpoint) {
      case CheckpointType.finish: {
        return <LessonSatistic />;
      }
      case CheckpointType.strike: {
        return <LessonAnswerStrike />;
      }
      case CheckpointType.mistake: {
        return <LessonMistakes />;
      }
    }
  }
};

const LessonContentCombined = () => {
  const theme = useTheme();
  const { openBottomSheet, closeBottomSheet, bottomSheetModalRef } = useBottomSheetModal({
    initIsOpen: false,
  });

  const { goToNextStep, progress, currentExercise, isLoading, checkpoint } = useLessonContext();
  const isAnswerCorrect = currentExercise?.status === ExerciseStatus.completed;
  const modalColor = isAnswerCorrect ? theme.colors.primary40 : theme.colors.error40;
  const exerciseId = currentExercise?.id;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ExerciseProvider key={exerciseId} stepId={exerciseId}>
      <MainLayout
        isScrollable={false}
        header={<LessonHeader progress={progress} />}
        footer={<LessonFooter onPress={openBottomSheet} />}
      >
        {checkpoint ? <CheckPoint checkpoint={checkpoint} /> : <ExerciseContent />}

        <BottomSheetModal
          backgroundStyle={{ backgroundColor: modalColor }}
          index={0}
          ref={bottomSheetModalRef}
          enableDismissOnClose
          enablePanDownToClose
          withOverlay={false}
        >
          <ExerciseFeedback
            type={
              isAnswerCorrect ? EXERCISE_FEEDBACK_TYPES.correct : EXERCISE_FEEDBACK_TYPES.incorrect
            }
            goToNextStep={() => {
              closeBottomSheet();
              goToNextStep();
            }}
            details={isAnswerCorrect ? null : currentExercise?.content.answer}
          />
        </BottomSheetModal>
      </MainLayout>
    </ExerciseProvider>
  );
};

export const LessonPage = () => {
  return (
    <LessonProvider>
      {}
      <LessonContentCombined />
    </LessonProvider>
  );
};

LessonPage.APP_URL = APP_URL.private.lesson.index;
