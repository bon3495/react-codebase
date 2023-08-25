import { type RouteObject } from 'react-router-dom';

import PrivateRoute from '@/components/routes/PrivateRoute';
import PublicRoute from '@/components/routes/PublicRoute';
import BlankLayout from '@/layouts/BlankLayout';
import HorizontalLayout from '@/layouts/HorizontalLayout';
import VerticalLayout from '@/layouts/VerticalLayout';
import { LayoutType, ROUTES_NAME } from '@/router/constant';
import Authentication from '@/router/routes/Authentication';
import Pages from '@/router/routes/Pages';
import { GetLayout, LayoutItem, RoutesType } from '@/types/route-types';

const getLayout: GetLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

const Routes: RoutesType[] = [...Authentication, ...Pages];

const MergeLayoutRoutes = (layout: LayoutItem, defaultLayout: LayoutItem) => {
  const LayoutRoutes: RoutesType[] = Routes.filter(
    (route) =>
      route?.meta?.layout === layout ||
      (!route?.meta?.layout && defaultLayout === layout),
  ).map((route) => {
    const RouteTag = route?.meta?.publicRoute ? PublicRoute : PrivateRoute;

    return {
      ...route,
      element: <RouteTag route={route}>{route.element}</RouteTag>,
    };
  });

  return LayoutRoutes;
};

const getRoutes = (layout?: LayoutItem) => {
  const defaultLayout = layout || LayoutType.Horizontal;
  const layouts = [
    LayoutType.Horizontal,
    LayoutType.Blank,
    LayoutType.Vertical,
  ];

  const AllRoutes: RouteObject[] = [];

  layouts.forEach((layout) => {
    const LayoutRoutes = MergeLayoutRoutes(layout, defaultLayout);

    AllRoutes.push({
      path: ROUTES_NAME.ROOT,
      element: getLayout[layout] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });

  return AllRoutes;
};

export { getRoutes, Routes };
