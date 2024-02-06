import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Rooms, RoomItem, Room } from './types';
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
  reducers: {
    selectRoom(state: Rooms, action: PayloadAction<Room>) {
      console.log(action.payload);
      state.currentRoom = action.payload;
    },
  },
  extraReducers: (builder): void => {
    builder.addCase(
      createRoom.fulfilled,
      (state: Rooms, action: PayloadAction<RoomItem>) => {
        state.roomsList = [...state.roomsList, action.payload];
      }
    );
    builder.addCase(
      getRooms.fulfilled,
      (state: Rooms, action: PayloadAction<Array<RoomItem>>) => {
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
export const { selectRoom } = roomsSlice.actions;
