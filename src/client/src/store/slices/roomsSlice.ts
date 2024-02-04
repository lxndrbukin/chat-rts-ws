import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Rooms, Room } from './types';
import { createRoom } from '../thunks/createRoom';
import { getRooms } from '../thunks/getRooms';
import { getCurrentRoom } from '../thunks/getCurrentRoom';

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
      createRoom.fulfilled,
      (state: Rooms, action: PayloadAction<Room>) => {
        state.roomsList = [...state.roomsList, action.payload];
      }
    );
    builder.addCase(
      getRooms.fulfilled,
      (state: Rooms, action: PayloadAction<Array<Room>>) => {
        state.roomsList = action.payload;
      }
    );
    builder.addCase(
      getCurrentRoom.fulfilled,
      (state: Rooms, action: PayloadAction<Room>) => {
        state.currentRoom = action.payload;
      }
    );
  },
});

export default roomsSlice.reducer;
