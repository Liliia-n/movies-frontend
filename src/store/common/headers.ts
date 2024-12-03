import { RootState } from '../store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const prepareHeaders = (headers: Headers, { getState }: any): Headers => {
  const token = (getState() as RootState).authState.token?.token;

  if (token) headers.set('Authorization', `Bearer ${token}`);

  return headers;
};

export default prepareHeaders;
