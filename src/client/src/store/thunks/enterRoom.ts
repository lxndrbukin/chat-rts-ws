import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RoomAuthValues } from './types';

export const enterRoom = createAsyncThunk(
  'rooms/enterRoom',
  async (roomValues: RoomAuthValues) => {
    try {
      const { roomId } = roomValues;
      const res = await axios.post(`/_api/rooms/${roomId}/auth`, { ...roomValues });
      return res.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
