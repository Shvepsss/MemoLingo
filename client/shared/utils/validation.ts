import isDate from 'validator/lib/isDate';
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';
import * as z from 'zod';

export const emailValidation = z.string().trim().email().refine(isEmail);

export const passwordValidation = z
  .string()
  .min(6)
  .refine(
    isStrongPassword,
    'Password must be 8+ chars, incl. uppercase, lowercase, number & special char.',
  );

const usernameRegex = /^(?!.*\.\.)(?!.*[.-]$)[^\W][\w.-]{0,29}$/;
export const usernameValidation = z
  .string()
  .trim()
  .refine(str => {
    return str.match(usernameRegex);
  }, 'Invalid username');

export const AgeSchema = z.coerce
  .number({ message: 'Enter a number' })
  .min(0, 'Enter a valid age')
  .max(100);

const onlyLettersRegex = /^[a-zA-Z/-]+$/;
export const firstNameValidationRequired = z
  .string()
  .trim()
  .refine(str => {
    return str?.match(onlyLettersRegex);
  }, 'Invalid First Name');

export const lastNameValidationRequired = z
  .string()
  .trim()
  .refine(str => {
    return str?.match(onlyLettersRegex);
  }, 'Invalid Last Name');

export const firstNameValidation = firstNameValidationRequired.optional();

export const lastNameValidation = lastNameValidationRequired.optional();

const BIRTHDAY_FORMAT = 'MM/dd/yyyy';
export const birthdayValidation = z
  .string()
  .refine(str => isDate(str, BIRTHDAY_FORMAT), 'Invalid Date')
  .optional();

export const RegistrationShema = z.object({
  age: AgeSchema,
  email: emailValidation,
  password: passwordValidation,
  name: usernameValidation,
});
