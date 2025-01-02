import { VoteModel } from "../core/models/vote.model";
import { PollModel } from "../core/models/poll.model";
import { Vote } from "@poll-app/libs";

export class VoteService {
  async createVote(data: Partial<Vote>): Promise<Vote> {
    const poll = await PollModel.findById(data.pollId);
    if (!poll) {
      throw new Error("Enquete não encontrada.");
    }

    const existingVote = await VoteModel.findOne({
      pollId: data.pollId,
      userId: data.userId,
    });

    if (existingVote) {
      throw new Error("Você já votou nesta enquete.");
    }

    const optionIndex = data.option;
    const isValidOption = poll.options.some(option => option.text === optionIndex);
    if (!isValidOption) {
      throw new Error("Opção inválida.");
    }

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
