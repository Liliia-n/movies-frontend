import { Navigate } from 'react-router-dom';

import { getTokenSelector } from 'src/store/features/auth/selectors';
import { useAppSelector } from 'src/store/hooks';

import Path from '../paths';

interface AuthRouteProps {
  children: JSX.Element;
}
function AuthRoute({ children }: AuthRouteProps): JSX.Element {
  const token = useAppSelector(getTokenSelector);

  const isAuthenticated = token;

  if (isAuthenticated) {
    return <Navigate to={Path.DASHBOARD} replace />;
  }

  return children;
}

export default AuthRoute;
