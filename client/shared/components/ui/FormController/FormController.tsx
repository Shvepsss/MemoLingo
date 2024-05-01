import React from 'react';

import { useFormikContext } from 'formik';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

import { MD3Theme } from 'app/shared/providers/theme/theme';
import { useTheme } from 'app/shared/hooks/styles/useTheme';

import { Typography, View } from 'app/shared/components/ui';

const DEFAULT_HINT_TEXT = 'placeholder-text';

const createStyles = (colors: MD3Theme['colors']) =>
  StyleSheet.create({
    hintText: {
      color: colors.black60,
    },
    errorText: {
      color: colors.error80,
    },
    hidden: {
      opacity: 0,
    },
  });

/**
 * FormControl component that handles form input validation errors and label rendering
 *
 * @param name - The name of the form field
 * @param label - The label to display for the form field
 * @param children - The input component to render within the FormControl component
 */

type FormControlProps<T = any> = {
  name: string;
  label?: string | React.ReactElement;
  hint?: string;
  render: (inputProps: InputPropsType<T>) => React.ReactNode;
  showDefaultHint?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type InputPropsType<T = string> = {
  name: string;
  label?: string | React.ReactElement;
  error: boolean;
  value?: T;
  onBlur: (e: any) => void;
  onChangeText: (value: string) => void;
  onChangeFieldValue: (fieldName: string) => (value: string) => void;
  testID: string;
};

export const FormController = <T extends any = any>({
  name,
  label,
  hint,
  render,
  showDefaultHint = true,
}: FormControlProps<T>) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  const { values, handleChange, touched, errors, setFieldTouched } = useFormikContext<any>();
  const value = values[name];
  const isTouched = Boolean(touched[name]);
  const isError = Boolean(errors[name]);
  const shouldShowError = isTouched && isError;
  const shouldShowHint = hint && !shouldShowError;

  const inputProps: InputPropsType<T> = React.useMemo(
    () => ({
      name,
      label,
      error: shouldShowError,
      value,
      onBlur: () => {
        setTimeout(() => setFieldTouched(name));
      },
      onChangeText: handleChange(name),
      onChangeFieldValue: (fieldName: string) => (val: string) => handleChange(fieldName)(val),
      testID: `input.${name}`,
    }),
    [setFieldTouched, handleChange, label, name, shouldShowError, value],
  );

  const getHintText = () => {
    if (shouldShowError) {
      return errors[name] as string;
    }

    if (shouldShowHint) {
      return hint;
    }

    // Setting 'error-placeholder' (or literally any text) just to make sure the error text below the input field occupies the height
    // This makes sure that height of the FormControl component doesn't change when there is error, or when there isn't any
    return DEFAULT_HINT_TEXT;
  };

  const hintText = getHintText();

  return (
    <View>
      {render(inputProps)}
      {(showDefaultHint || getHintText() !== DEFAULT_HINT_TEXT) && (
        <Typography
          variant="smallRegular"
          style={hintText === DEFAULT_HINT_TEXT ? styles.hidden : styles.errorText}
        >
          {getHintText()}
        </Typography>
      )}
    </View>
  );
};
