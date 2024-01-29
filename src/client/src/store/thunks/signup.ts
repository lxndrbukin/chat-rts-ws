import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk(
  'session/signup',
  async (formValues: object) => {
    try {
      const res = await axios.post('/auth/signup', { ...formValues });
      return res.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
