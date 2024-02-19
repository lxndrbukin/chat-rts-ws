import { ErrorMessage } from '../types';

export const isError = (payload: any): payload is ErrorMessage =>
  payload.message;
