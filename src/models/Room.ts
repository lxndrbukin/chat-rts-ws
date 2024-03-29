import mongoose, { Schema } from 'mongoose';
import { Room, RoomMember, RoomMessage, Models } from './types';

const RoomSchema = new Schema<Room>({
  roomId: Number,
  roomName: { type: String, required: true },
  password: { type: String, default: undefined },
  members: Array<RoomMember>,
  online: { type: Number, default: 0 },
  messages: Array<RoomMessage>,
});

export default mongoose.model<Room>(Models.Room, RoomSchema);
