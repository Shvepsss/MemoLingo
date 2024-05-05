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
  },
} as const;
