import mongoose, { Schema } from 'mongoose';
import { User, Models } from './types';

const UserSchema: Schema = new Schema<User>({
  userId: Number,
  avatar: {
    type: String,
    default:
      'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
  },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model<User>(Models.User, UserSchema);
