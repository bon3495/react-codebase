import { LayoutType, ROUTES_NAME } from '@/router/constant';

export type RouteItem = (typeof ROUTES_NAME)[keyof typeof ROUTES_NAME];

export type LayoutItem = (typeof LayoutType)[keyof typeof LayoutType];

export type RouteMeta = {
  layout?: LayoutItem;
  publicRoute?: boolean;
};

export type RoutesType = {
  path: RouteItem;
  element: JSX.Element;
  meta?: RouteMeta;
};

export type GetLayout = {
  [key in LayoutType]: JSX.Element;
};
