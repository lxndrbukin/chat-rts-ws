import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'session/login',
  async (formValues: object) => {
    try {
      const res = await axios.post('/auth/login', { ...formValues });
      return res.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
