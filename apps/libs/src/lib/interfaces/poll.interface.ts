import { Document } from "mongoose";

export interface Poll extends Document {
  id: string;
  creatorUser: string;
  question: string;
  options: Option[];
  createdAt: string;
  updatedAt: string;
  expiredAt: Date;
  isExpired: () => boolean;
}

export interface Option extends Document {
  text: string;
  votes: number;
}
