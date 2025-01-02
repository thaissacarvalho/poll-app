import { Document } from "mongoose";

export interface Vote extends Document {
  id: string;
  pollId: string;
  userId: string;
  option: string;
  createdAt: string;
  updatedAt: string;
}
