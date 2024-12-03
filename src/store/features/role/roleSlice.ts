/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Roles } from 'src/common/enums';

const initialState = {
  role: Roles.PARTICIPANT
};

export const roleSlice = createSlice({
  name: 'roleSlice',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<Roles>) => {
      state.role = action.payload;
    }
  }
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
