import { Vote } from "@poll-app/libs";
import { model, Schema } from "mongoose";

const VoteSchema = new Schema<Vote>({
  pollId: {
    type: String,
    ref: "Poll",
    required: true,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  option: {
    type: String,
    ref: "Option",
    required: true,
  },
}, { timestamps: true });

VoteSchema.index({ pollId: 1, userId: 1 }, { unique: true });

export const VoteModel = model<Vote>("Vote", VoteSchema);
