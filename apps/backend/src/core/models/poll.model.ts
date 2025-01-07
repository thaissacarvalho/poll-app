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
    text: {
      type: String,
      required: [true, 'O campo text é obrigatório.']
    },
    votes: {
      type: Number,
      required: true,
      default: 0,
    },
  }],
  expiredAt: {
    type: Date,
    required: [true, 'O campo expiredAt é obrigatório.'],
  }
}, { timestamps: true });

PollSchema.methods.isExpired = function (): boolean {
  return new Date() > this.expiredAt;
};

// Indice TTL para expiração automatica do Documento.

// PollSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });

export const PollModel = model<Poll>('Poll', PollSchema);
