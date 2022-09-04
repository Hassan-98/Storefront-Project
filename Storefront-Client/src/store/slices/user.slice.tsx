import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IUser {
  id?: number;
  firstname: string;
  lastname: string;
  password?: string;
  token?: string;
}

interface UserState {
  user: IUser | null
}

const initialState: UserState = { user: null };

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.user = action.payload;
    }
  }
})

export const UserActions = User.actions

export default User.reducer;