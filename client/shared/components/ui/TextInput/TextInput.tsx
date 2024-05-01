import {
  TextInput as LocalTextInput,
  type TextInputProps as LocalTextInputProps,
} from 'react-native-paper';

import { useTheme } from 'app/shared/hooks/styles';

export const TextInput = (props: LocalTextInputProps) => {
  const theme = useTheme();
  return (
    <LocalTextInput
      mode="outlined"
      outlineColor={theme.colors.black40}
      activeOutlineColor={theme.colors.primary60}
      outlineStyle={{ borderRadius: 10 }}
      theme={{
        ...theme,
        colors: {
          error: theme.colors.error80,
        },
      }}
      {...props}
    />
  );
};
