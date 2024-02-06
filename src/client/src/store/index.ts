import { configureStore } from '@reduxjs/toolkit';
import sessionSlice from './slices/sessionSlice';
import roomsSlice from './slices/roomsSlice';

export const store = configureStore({
  reducer: {
    session: sessionSlice,
    rooms: roomsSlice,
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
export * from './thunks/getCurrentRoom';
export * from './thunks/enterRoom';
export * from './slices/types';
export * from './slices/sessionSlice';
export * from './slices/roomsSlice';
