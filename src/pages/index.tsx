import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Path from 'src/routing/paths';
import { clearState } from 'src/store/features/auth/authSlice';
import { getTokenSelector } from 'src/store/features/auth/selectors';
import { useAppDispatch, useAppSelector } from 'src/store/hooks';

export default function IndexPage(): null {
  const dispatch = useAppDispatch();
  const navigate = useRouter();
  const token = useAppSelector(getTokenSelector);

  useEffect(() => {
    if (!token) {
      navigate.push(Path.LOGIN);
      dispatch(clearState());
    } else {
      navigate.push(Path.DASHBOARD);
    }
  }, [token, navigate, dispatch]);

  return null;
}
