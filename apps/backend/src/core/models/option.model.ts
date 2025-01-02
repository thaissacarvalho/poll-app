import { model, Schema } from "mongoose";
import { Option } from '@poll-app/libs';

const OptionSchema = new Schema<Option>({
  text: {
    type: String,
    required: [true, 'O campo text é obrigatório.'],
  },
  votes: {
    type: Number,
    required: true,
    default: 0,
  },
}, { timestamps: true });

export const OptionModel = model<Option>('Option', OptionSchema);
