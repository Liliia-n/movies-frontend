import { useNavigate as useRouterNavigate } from 'react-router-dom';

type ReturnType = {
  goBack: () => void;
  goForward: () => void;
  goTo: (path: string, state?: string) => void;
  replace: (path: string, state?: string) => void;
};

const useNavigate = (): ReturnType => {
  const navigate = useRouterNavigate();

  const goBack = (): void => navigate(-1);
  const goForward = (): void => navigate(1);
  const goTo = (path: string, state?: string): void => navigate(path, { state });
  const replace = (path: string, state?: string): void => navigate(path, { replace: true, state });

  return { goBack, goForward, goTo, replace };
};

export default useNavigate;
