import { Vote } from "@poll-app/libs";
import { model, Schema } from "mongoose";

const VoteSchema = new Schema<Vote>({
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

export const VoteModel = model<Vote>("Vote", VoteSchema);
