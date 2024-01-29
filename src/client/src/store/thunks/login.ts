import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('session/login', async (formValues: object): Promise<void> => {
  const res = await axios.post('/auth/login', { ...formValues });
  return res.data;
});