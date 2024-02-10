import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Rooms, Room, RoomMessage } from './types';
import { createRoom } from '../thunks/createRoom';
import { getRooms } from '../thunks/getRooms';
import { getCurrentRoom } from '../thunks/getCurrentRoom';
import { enterRoom } from '../thunks/enterRoom';

const initialState: Rooms = {
  roomsList: [],
  currentRoom: undefined,
};

const roomsSlice = createSlice({
  name: Slices.Rooms,
  initialState,
  reducers: {
    selectRoom(state: Rooms, action: PayloadAction<Room>) {
      state.currentRoom = action.payload;
    },
    pushMessage(state: Rooms, action: PayloadAction<RoomMessage>) {
      if (state.currentRoom && state.currentRoom.messages) {
        state.currentRoom.messages = [
          ...state.currentRoom.messages,
          action.payload,
        ];
      }
    },
  },
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
    builder.addCase(
      enterRoom.fulfilled,
      (state: Rooms, action: PayloadAction<Room>) => {
        state.currentRoom = action.payload;
      }
    );
  },
});

export default roomsSlice.reducer;
export const { selectRoom, pushMessage } = roomsSlice.actions;
