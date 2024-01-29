import mongoose, { Schema } from 'mongoose';

const UserSchema: Schema = new Schema({
  userId: Number,
  avatar: {
    type: String,
    default:
      'https://alumni.engineering.utoronto.ca/files/2022/05/Avatar-Placeholder-400x400-1.jpg',
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model('user', UserSchema);
