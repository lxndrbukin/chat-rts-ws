import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AuthFormValues } from './types';

export const login = createAsyncThunk(
  'session/login',
  async (formValues: AuthFormValues) => {
    try {
      const res = await axios.post('/auth/login', { ...formValues });
      return res.data;
    } catch (err: any) {
      return err.response.data;
    }
  }
);
