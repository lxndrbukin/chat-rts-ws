import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RoomAuthData } from './types';

export const enterRoom = createAsyncThunk(
  'rooms/enterRoom',
  async (roomData: RoomAuthData) => {
    try {
      const { roomId } = roomData;
      const res = await axios.post(`/_api/rooms/${roomId}/auth`, {
        ...roomData,
      });
      return res.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
