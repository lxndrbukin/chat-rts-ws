import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Session, UserData, ErrorMessage } from './types';
import { isError } from './helpers';
import { signup } from '../thunks/signup';
import { login } from '../thunks/login';
import { getCurrentUser } from '../thunks/getCurrentUser';

const initialState: Session = {
  isLoggedIn: false,
  userData: undefined,
  message: undefined,
};

const sessionSlice = createSlice({
  name: Slices.Session,
  initialState,
  reducers: {
    updateSessionStatus(state: Session, action: PayloadAction<UserData>) {
      if (state.userData) state.userData.status = action.payload.status;
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(
      signup.fulfilled,
      (state: Session, action: PayloadAction<UserData | ErrorMessage>) => {
        if (isError(action.payload)) state.message = action.payload.message;
        else {
          if (state.message) state.message = undefined;
          state.isLoggedIn = true;
          state.userData = action.payload;
        }
      }
    );
    builder.addCase(
      login.fulfilled,
      (state: Session, action: PayloadAction<UserData | ErrorMessage>) => {
        if (isError(action.payload)) state.message = action.payload.message;
        else {
          if (state.message) state.message = undefined;
          state.isLoggedIn = true;
          state.userData = action.payload;
        }
      }
    );
    builder.addCase(
      getCurrentUser.fulfilled,
      (state: Session, action: PayloadAction<UserData | null>) => {
        if (!action.payload) {
          state.userData = undefined;
          state.isLoggedIn = false;
        } else {
          state.userData = action.payload;
          state.isLoggedIn = true;
        }
      }
    );
  },
});

export default sessionSlice.reducer;
export const { updateSessionStatus } = sessionSlice.actions;
