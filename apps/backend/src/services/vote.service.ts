import { VoteModel } from "../core/models/vote.model";
import { PollModel } from "../core/models/poll.model";
import { Vote } from "@poll-app/libs";

export class VoteService {
  async createVote(data: Partial<Vote>): Promise<Vote> {
    const { pollId, userId, option } = data;

    const poll = await PollModel.findById(pollId);
    if (!poll) {
      throw new Error("Poll not found");
    }

    const existingVote = await VoteModel.findOne({ pollId, userId });
    if (existingVote) {
      throw new Error("You have already voted in this poll");
    }

    const optionIndex = poll.options.findIndex(opt => opt.text === option);
    if (optionIndex === -1) {
      throw new Error("Invalid option");
    }

    poll.options[optionIndex].votes += 1;
    await poll.save();

    const vote = new VoteModel(data);
    return await vote.save();
  }

  async getVoteById(id: string): Promise<Vote | null> {
    return await VoteModel.findById(id);
  }

  async getAllVotes(): Promise<Vote[]> {
    return await VoteModel.find();
  }

  async deleteVote(id: string): Promise<Vote | null> {
    return await VoteModel.findByIdAndDelete(id);
  }
}
