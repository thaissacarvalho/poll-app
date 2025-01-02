import { Poll } from "@poll-app/libs";
import { PollModel } from "../core/models/poll.model";

export class PollService {
  async createPoll(data: Partial<Poll>): Promise<Poll> {
    const poll = new PollModel(data);
    return await poll.save();
  }

  async getPollById(id: string): Promise<Poll | null> {
    return await PollModel.findById(id).populate('creatorUser', 'username');
  }
  n
  async getAllPolls(): Promise<Poll[]> {
    return await PollModel.find();
  }

  // async updatePoll(id: string, updateData: Partial<Poll>): Promise<Poll | null> {
  //   return await PollModel.findByIdAndUpdate(id, updateData, { new: true });
  // }

  async deletePoll(id: string): Promise<Poll | null> {
    return await PollModel.findByIdAndDelete(id);
  }
}
