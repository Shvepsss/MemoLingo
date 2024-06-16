import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { Button, ViewProps } from 'app/shared/components/ui/index';
import { useDynamicStyles, getDynamicStylesInput } from 'app/shared/hooks/styles/useDynamicStyles';

type ButtonOptionProps = {
  title?: string;
  word: clientWordType;
  selectedValue: string;
  setSelectedValue: (word: clientWordType) => void;
  right?: React.ReactNode;
  left?: React.ReactNode;
  style?: ViewProps['style'];
};

const dynamicStylesInput = getDynamicStylesInput(theme => {
  return {
    selectedButton: {
      backgroundColor: theme.colors.black0,
      borderColor: theme.colors.primary60,
      borderWidth: 2,
    },
    unselectedButton: {
      backgroundColor: theme.colors.black0,
      borderColor: theme.colors.black60,
      borderWidth: 1,
      width: '100%',
    },
  };
});

export const ButtonOption = ({
  title,
  word,
  selectedValue,
  setSelectedValue,
  right,
  left,
  style,
}: ButtonOptionProps) => {
  const styles = useDynamicStyles(dynamicStylesInput);
  return (
    <Button
      radius="square"
      title={title}
      titleColor={selectedValue === word.original ? 'black100' : 'black80'}
      style={
        selectedValue === word.original
          ? [styles.selectedButton, style]
          : [styles.unselectedButton, style]
      }
      onPress={() => {
        setSelectedValue(word);
      }}
      right={right}
      left={left}
    />
  );
};
