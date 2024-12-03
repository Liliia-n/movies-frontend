/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState, Token, User } from './types';

const initialState: AuthState = {
  user: null,
  token: null
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    clearState(state) {
      state.token = null;
      state.user = null;
    },
    setToken: (state, action: PayloadAction<Token>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    }
  }
});
export const { clearState, setToken, setUser } = authSlice.actions;
export default authSlice.reducer;
