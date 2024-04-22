import { z, ZodError } from 'zod';
export const validateData = (schema: z.ZodObject<any, any>, data: any): Record<string, string> => {
  try {
    schema.parse(data);
    return {};
  } catch (error) {
    if (error instanceof ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach(err => {
        const path = err.path.join('.');
        errors[path] = err.message;
      });
      return errors;
    } else {
      throw error;
    }
  }
};

export const PasswordSchema = z
  .string()
  .min(8, 'Password must contain at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least 1 uppercase letter')
  .regex(/[0-9]/, 'Password must contain at least 1 number');

export const EmailSchema = z.string().email('Invalid email format');

export const UsernameSchema = z.string().min(3, 'Username must be at least 3 characters long');

export const AgeSchema = z.number().min(0, 'Enter a valid age');

export const RegistrationShema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});
