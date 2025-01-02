import { Document } from "mongoose";

export interface User extends Document {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
