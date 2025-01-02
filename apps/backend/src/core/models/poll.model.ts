import { model, Schema } from "mongoose";
import { Poll } from '@poll-app/libs';

const PollSchema = new Schema<Poll>({
  creatorUser: {
    type: String,
    ref: 'User',
    required: [true, 'O campo creatorUser é obrigatório.'],
  },
  question: {
    type: String,
    required: [true, 'O campo question é obrigatório.'],
  },
  options: [{
    type: String,
    ref: 'Option'
  }],
  expiredAt: {
    type: Date,
    required: [true, 'O campo expiredAt é obrigatório.'],
  }
}, { timestamps: true });

export const PollModel = model<Poll>('Poll', PollSchema);
