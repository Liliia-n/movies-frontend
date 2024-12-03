import { RootState } from 'src/store/store';

import { Token, User } from './types';

export const getTokenSelector = (state: RootState): Token | null => state.authState.token;
export const getUserSelector = (state: RootState): User | null => state.authState.user;
