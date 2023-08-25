import { lazy } from 'react';

import { LayoutType, ROUTES_NAME } from '@/router/constant';
import { RoutesType } from '@/types/route-types';

const Blog = lazy(() => import('@/containers/blog'));
const Booking = lazy(() => import('@/containers/booking'));
const Maintenance = lazy(() => import('@/containers/misc/Maintenance'));
const NotAuthorized = lazy(() => import('@/containers/misc/NotAuthorized'));

const Pages: RoutesType[] = [
  {
    path: ROUTES_NAME.BLOG,
    element: <Blog />,
    meta: {
      publicRoute: true,
    },
  },
  {
    path: ROUTES_NAME.BOOKING,
    element: <Booking />,
  },
  {
    path: ROUTES_NAME.MAINTENANCE,
    element: <Maintenance />,
    meta: {
      publicRoute: true,
      layout: LayoutType.Blank,
    },
  },
  {
    path: ROUTES_NAME.NOT_AUTHORIZED,
    element: <NotAuthorized />,
    meta: {
      publicRoute: true,
      layout: LayoutType.Blank,
    },
  },
];

export default Pages;
