import { lazy } from 'react';

import { LayoutType, ROUTES_NAME } from '@/router/constant';
import { RoutesType } from '@/types/route-types';

const Login = lazy(() => import('@/containers/authentication/login'));
const Register = lazy(() => import('@/containers/authentication/register'));

const Authentication: RoutesType[] = [
  {
    path: ROUTES_NAME.LOGIN,
    element: <Login />,
    meta: {
      layout: LayoutType.Blank,
      publicRoute: true,
    },
  },
  {
    path: ROUTES_NAME.REGISTER,
    element: <Register />,
    meta: {
      layout: LayoutType.Blank,
      publicRoute: true,
    },
  },
];

export default Authentication;
