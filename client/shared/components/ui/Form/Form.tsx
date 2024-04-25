import { Formik, FormikConfig, FormikValues } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

export type FormProps<T> = Omit<FormikConfig<T>, 'validateOnMount'>;

/**
 * React component that creates a form with validation schema using Formik and zod-formik-adapter.
 * @template T - A generic type that extends FormikValues
 * @param {FormProps<T>} props - Props for the Formik component, along with a validation schema.
 * @returns A Formik component with validation schema.
 */
export const Form = <T extends FormikValues>({ validationSchema, ...props }: FormProps<T>) => {
  // Convert the validation schema from zod to formik format.
  const formikValidationSchema = toFormikValidationSchema(validationSchema);

  /**
   * isInitialValid=false so that we can use `isValid` value to disable the submit button on mount
   * This is to ensure that we follow the requirement to keep the submit button in disabled state until the values are valid
   */
  return <Formik {...props} validateOnMount validationSchema={formikValidationSchema} />;
};
