import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RoomFormValues } from './types';

export const createRoom = createAsyncThunk(
  'rooms/createRoom',
  async (formValues: RoomFormValues) => {
    const res = await axios.post('/_api/rooms', { ...formValues });
    return res.data;
  }
);
