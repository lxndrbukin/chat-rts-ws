import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RoomMessageData } from './types';

export const sendMessage = createAsyncThunk('rooms/sendMessage', async (messageData: RoomMessageData) => {
  const { roomId } = messageData;
  const res = await axios.post(`/_api/rooms/${roomId}/messages`, { ...messageData });
  return res.data;
});