import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RoomAuthValues } from './types';

export const enterRoom = createAsyncThunk(
  'rooms/enterRoom',
  async (roomValues: RoomAuthValues) => {
    const { roomId, password } = roomValues;
    const res = await axios.post(`/_api/rooms/${roomId}/auth`);
    return res.data;
  }
);
