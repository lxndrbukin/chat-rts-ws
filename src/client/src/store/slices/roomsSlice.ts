import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Rooms, Room } from './types';
import { getRooms } from '../thunks/getRooms';

const initialState: Rooms = {
  roomsList: [],
  currentRoom: undefined,
};

const roomsSlice = createSlice({
  name: Slices.Rooms,
  initialState,
  reducers: {},
  extraReducers: (builder): void => {
    builder.addCase(
      getRooms.fulfilled,
      (state: Rooms, action: PayloadAction<Array<Room>>) => {
        state.roomsList = action.payload;
      }
    );
  },
});

export default roomsSlice.reducer;
