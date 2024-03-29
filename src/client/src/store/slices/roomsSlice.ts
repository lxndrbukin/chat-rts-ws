import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Slices, Rooms, Room, RoomMessage, UserData } from './types';
import { createRoom } from '../thunks/createRoom';
import { getRooms } from '../thunks/getRooms';
import { getCurrentRoom } from '../thunks/getCurrentRoom';
import { enterRoom } from '../thunks/enterRoom';
import { sendMessage } from '../thunks/sendMessage';
import { updateRoomOnline } from '../thunks/updateRoomOnline';

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
    updateOnline(state: Rooms, action: PayloadAction<any>) {
      state.roomsList = [...state.roomsList];
    },
    joinRoom(state: Rooms, action: PayloadAction<UserData>) {
      if (state.currentRoom) {
        (state.currentRoom.members as UserData[]) = [
          ...(state.currentRoom.members as UserData[]),
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
    builder.addCase(
      sendMessage.fulfilled,
      (state: Rooms, action: PayloadAction<RoomMessage>) => {
        if (state.currentRoom && state.currentRoom.messages) {
          state.currentRoom.messages = [
            ...state.currentRoom.messages,
            action.payload,
          ];
        }
      }
    );
    builder.addCase(
      updateRoomOnline.fulfilled,
      (state: Rooms, action: PayloadAction<Array<Room>>) => {
        state.roomsList = action.payload;
      }
    );
  },
});

export default roomsSlice.reducer;
export const { selectRoom, updateOnline } = roomsSlice.actions;
