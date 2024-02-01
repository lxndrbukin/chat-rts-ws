import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';

export const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './thunks/types';
export * from './thunks/signup';
export * from './thunks/login';
export * from './thunks/getCurrentUser';
export * from './thunks/createRoom';
export * from './thunks/getRooms';
export * from './slices/types';
export * from './slices/sessionSlice';
export * from './slices/roomsSlice';
