export const SIGN_UP_STEPS = {
  age: 'age',
  name: 'name',
  email: 'email',
  password: 'password',
  finish: 'finish',
} as const;

export type SignUpStep = (typeof SIGN_UP_STEPS)[keyof typeof SIGN_UP_STEPS];

export const SIGN_UP_PROGRESS = {
  [SIGN_UP_STEPS.age]: 0,
  [SIGN_UP_STEPS.name]: 0.25,
  [SIGN_UP_STEPS.email]: 0.5,
  [SIGN_UP_STEPS.password]: 0.75,
  [SIGN_UP_STEPS.finish]: 1,
} satisfies Record<SignUpStep, number>;

export const SIGN_UP_STEPS_QUEUE = Object.values(SIGN_UP_STEPS);
