import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateRoomOnline = createAsyncThunk(
  'rooms/updateOnline',
  async (roomId: number) => {
    const res = await axios.post(`/_api/rooms/${roomId}/connect`);
    return res.data;
  }
);
