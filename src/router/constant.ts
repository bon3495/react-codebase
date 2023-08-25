export const ROUTES_NAME = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  BLOG: '/blog',
  BOOKING: '/booking',
  ERROR: '*',
  MAINTENANCE: '/maintenance',
  NOT_AUTHORIZED: '/not-authorized',
} as const;

export enum LayoutType {
  Blank = 'blank',
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}
