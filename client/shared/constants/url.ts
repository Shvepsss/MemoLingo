export const APP_URL = {
  public: {
    main: {
      index: '/',
      home: '/home',
      gym: '/gym',
      goals: '/goals',
      profile: '/profile',
      league: '/league',
    },
    signIn: {
      index: '/sign-in',
    },
    start: {
      index: '/start',
    },
    signUp: {
      profile: '/sign-up/profile',
      intro: '/sign-up/intro',
    },
  },
  private: {
    search: {
      index: '/search',
    },
    lesson: {
      index: '/lesson',
    },
  },
} as const;

export const API_URL = {
  signIn: '/sign-in',
  signUp: '/users',
  words: '/words',
};

export const API_URLS = Object.values(API_URL);

export type ApiUrl = (typeof API_URLS)[number];
