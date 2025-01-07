import { Poll } from "@poll-app/libs";
import { PollModel } from "../core/models/poll.model";

export class PollService {
  async createPoll(data: Partial<Poll>, durationInMinutes: number): Promise<Poll> {
    const expiredAt = new Date();
    expiredAt.setMinutes(expiredAt.getMinutes() + durationInMinutes); 

    // Adiciona a data de expiração ao objeto `data`
    const pollData = { ...data, expiredAt };

    const poll = new PollModel(pollData);
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

  async findExpiredPolls(): Promise<Poll[]> {
    const currentDate = new Date();

    currentDate.setMinutes(currentDate.getMinutes() - 1);
    
    currentDate.setSeconds(0, 0);
  
    console.log("One minute before the current time (Date with seconds and milliseconds reset): ", currentDate);
  
    return await PollModel.find({
      expiredAt: { $lt: currentDate }
    });
  }
}
