import { lazy } from 'react';
// ** Router imports **
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES_NAME } from '@/constants/router';
// ** Layouts **
import BlankLayout from '@/layouts/BlankLayout';
import HorizontalLayout from '@/layouts/HorizontalLayout';
import { getRoutes } from '@/router/routes';

// ** Components **
const Error = lazy(() => import('@/containers/misc/Error'));
const Dashboard = lazy(() => import('@/containers/dashboard'));

const Router = () => {
  const allRoutes = getRoutes();

  // Check logic here to redirect to login if not authenticated
  const getHomeRoute = () => {
    return ROUTES_NAME.DASHBOARD;
  };

  const routes = useRoutes([
    {
      path: ROUTES_NAME.ROOT,
      index: true,
      element: <Navigate replace to={getHomeRoute()} />,
    },
    {
      path: ROUTES_NAME.DASHBOARD,
      element: <HorizontalLayout />,
      children: [{ path: ROUTES_NAME.DASHBOARD, element: <Dashboard /> }],
    },
    {
      path: ROUTES_NAME.ERROR,
      element: <BlankLayout />,
      children: [{ path: ROUTES_NAME.ERROR, element: <Error /> }],
    },
    ...allRoutes,
  ]);

  return routes;
};

export default Router;
