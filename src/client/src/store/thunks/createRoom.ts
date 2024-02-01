import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createRoom = createAsyncThunk(
  'rooms/createRoom',
  async (formValues: object) => {
    const res = await axios.post('/_api/rooms', { ...formValues });
    return res.data;
  }
);
