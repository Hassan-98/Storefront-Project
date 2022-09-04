import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './reducers'

const store = configureStore({
  reducer: rootReducer
});

export type StoreState = ReturnType<typeof store.getState>

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export const useStoreSelector: TypedUseSelectorHook<StoreState> = useSelector;

export default store;