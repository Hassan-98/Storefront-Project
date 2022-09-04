import { combineReducers } from '@reduxjs/toolkit';
//= Slices
import User from './slices/user.slice';

export const rootReducer = combineReducers({
  user: User
});

export type RootState = ReturnType<typeof rootReducer>