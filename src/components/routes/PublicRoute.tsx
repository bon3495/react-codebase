import { Suspense, SuspenseProps } from 'react';
import { Navigate } from 'react-router-dom';

import { ROUTES_NAME } from '@/router/constant';
// ** Reoutes Type Import **
import { RoutesType } from '@/types/route-types';

interface Props extends SuspenseProps {
  route: RoutesType;
}

const DUMMY_HAS_USER = false;
const DUMMY_IS_RESTRICTED = false;

const PublicRoute = ({ children, route }: Props) => {
  if (route) {
    if (DUMMY_HAS_USER && DUMMY_IS_RESTRICTED) {
      return <Navigate to={ROUTES_NAME.ROOT} />;
    }
  }

  return <Suspense fallback={null}>{children}</Suspense>;
};

export default PublicRoute;
