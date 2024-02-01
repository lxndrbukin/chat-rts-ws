import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRooms = createAsyncThunk('rooms/getRooms', async () => {
  const res = await axios.get('/_api/rooms');
  return res.data;
});
