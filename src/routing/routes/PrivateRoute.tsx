import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import Path from 'src/routing/paths';
import { clearState } from 'src/store/features/auth/authSlice';
import { getTokenSelector } from 'src/store/features/auth/selectors';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

interface PrivateRouteProps {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const token = useAppSelector(getTokenSelector);

  useEffect(() => {
    if (!token) {
      navigate(Path.LOGIN);
      dispatch(clearState());
    }
  }, [token, navigate, dispatch]);

  if (!token) {
    return <Navigate to={Path.LOGIN} replace />;
  }

  return children;
}

export default PrivateRoute;
