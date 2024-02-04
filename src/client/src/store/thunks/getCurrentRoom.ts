import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCurrentRoom = createAsyncThunk(
  'rooms/getCurrentRoom',
  async (roomId: string) => {
    const res = await axios.get(`/_api/rooms/${roomId}`);
    return res.data;
  }
);
