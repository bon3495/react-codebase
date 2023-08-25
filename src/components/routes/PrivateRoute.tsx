import { Suspense, SuspenseProps } from 'react';
import { Navigate } from 'react-router-dom';

// ** Spinner Import **
import Spinner from '@/components/spinner';
import { ROUTES_NAME } from '@/router/constant';
// ** Reoutes Type Import **
import { RoutesType } from '@/types/route-types';

interface Props extends SuspenseProps {
  route: RoutesType;
}

const DUMMY_HAS_USER = true;

const PrivateRoute = ({ children, route }: Props) => {
  if (route) {
    if (!DUMMY_HAS_USER) {
      return <Navigate to={ROUTES_NAME.LOGIN} />;
    }
  }

  return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default PrivateRoute;
