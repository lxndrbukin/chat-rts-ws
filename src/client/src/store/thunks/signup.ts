import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk(
  'session/signup',
  async (formValues: object) => {
    const res = await axios.post('/auth/signup', { ...formValues });
    return res.data;
  }
);
