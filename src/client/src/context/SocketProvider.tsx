import React, { createContext } from 'react';
import { SocketProviderProps } from './types';

const socket = new WebSocket('ws://localhost:5001');

export const SocketContext = createContext(socket);

export const SocketProvider = ({ children }: SocketProviderProps) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
