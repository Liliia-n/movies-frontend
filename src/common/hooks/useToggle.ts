import { useState } from 'react';

type ReturnType = [boolean, () => void];

const useToggle = (initialState: boolean = false): ReturnType => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = (): void => setState(!state);

  return [state, toggle];
};

export default useToggle;
