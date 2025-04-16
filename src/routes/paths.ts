// ----------------------------------------------------------------------

import { kebabCase } from 'es-toolkit';

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------
const MOCK_UP = 'The Future of Renewable Energy: Innovations and Challenges Ahead';
export const paths = {
  faqs: '/faqs',
  minimalStore: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    amplify: {
      signIn: `${ROOTS.AUTH}/amplify/sign-in`,
      verify: `${ROOTS.AUTH}/amplify/verify`,
      signUp: `${ROOTS.AUTH}/amplify/sign-up`,
      updatePassword: `${ROOTS.AUTH}/amplify/update-password`,
      resetPassword: `${ROOTS.AUTH}/amplify/reset-password`,
    },
    jwt: {
      signIn: `${ROOTS.AUTH}/jwt/sign-in`,
      signUp: `${ROOTS.AUTH}/jwt/sign-up`,
    },
    firebase: {
      signIn: `${ROOTS.AUTH}/firebase/sign-in`,
      verify: `${ROOTS.AUTH}/firebase/verify`,
      signUp: `${ROOTS.AUTH}/firebase/sign-up`,
      resetPassword: `${ROOTS.AUTH}/firebase/reset-password`,
    },
    auth0: {
      signIn: `${ROOTS.AUTH}/auth0/sign-in`,
    },
    supabase: {
      signIn: `${ROOTS.AUTH}/supabase/sign-in`,
      verify: `${ROOTS.AUTH}/supabase/verify`,
      signUp: `${ROOTS.AUTH}/supabase/sign-up`,
      updatePassword: `${ROOTS.AUTH}/supabase/update-password`,
      resetPassword: `${ROOTS.AUTH}/supabase/reset-password`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    projects: `${ROOTS.DASHBOARD}/projects`,
    three: `${ROOTS.DASHBOARD}/three`,
    post: {
      root: `${ROOTS.DASHBOARD}/post`,
      new: `${ROOTS.DASHBOARD}/post/new`,
      details: (projectId: string) => `${ROOTS.DASHBOARD}/post/${kebabCase(projectId)}`,
      edit: (title: string) => `${ROOTS.DASHBOARD}/post/${kebabCase(title)}/edit`,
      demo: {
        details: `${ROOTS.DASHBOARD}/post/${kebabCase(MOCK_UP)}`,
        edit: `${ROOTS.DASHBOARD}/post/${kebabCase(MOCK_UP)}/edit`,
      },
    },
  },
  post: {
    root: `${ROOTS.DASHBOARD}/post`,
    new: `${ROOTS.DASHBOARD}/post/new`,
    details: (title: string) => `${ROOTS.DASHBOARD}/post/${kebabCase(title)}`,
    edit: (title: string) => `${ROOTS.DASHBOARD}/post/${kebabCase(title)}/edit`,
    demo: {
      details: `${ROOTS.DASHBOARD}/post/${kebabCase(MOCK_UP)}`,
      edit: `${ROOTS.DASHBOARD}/post/${kebabCase(MOCK_UP)}/edit`,
    },
  },
};
