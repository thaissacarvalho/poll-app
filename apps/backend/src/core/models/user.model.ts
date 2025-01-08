import { model, Schema } from "mongoose";
import { User } from '@poll-app/libs';

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
}, { timestamps: true });

export const UserModel = model<User>('User', UserSchema);
