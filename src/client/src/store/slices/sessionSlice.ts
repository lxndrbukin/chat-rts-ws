import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Session, UserData, ErrorMessage } from './types';
import { signup } from '../thunks/signup';
import { login } from '../thunks/login';

const initialState: Session = {
  isLoggedIn: false,
  userData: undefined,
  message: undefined,
};

const isError = (payload: any): payload is ErrorMessage => payload.message;

const sessionSlice = createSlice({
  name: Slices.Session,
  initialState,
  reducers: {},
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
  },
});

export default sessionSlice.reducer;
