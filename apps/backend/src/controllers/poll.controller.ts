import { Request, Response } from 'express';
import { PollService } from '../services/poll.service';

export class PollController {

  private pollService: PollService;

  constructor() {
    this.pollService = new PollService();
  }

  async createPoll(req: Request, res: Response): Promise<void> {
    try {
      const poll = await this.pollService.createPoll(req.body);
      res.status(201).json(poll);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getPollById(req: Request, res: Response): Promise<void> {
    try {
      const poll = await this.pollService.getPollById(req.params.id);
      if (!poll) {
        res.status(404).json({ error: 'Poll not found' });
        return;
      }
      res.status(200).json(poll);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAllPolls(req: Request, res: Response): Promise<void> {
    try {
      const polls = await this.pollService.getAllPolls();
      res.status(200).json(polls);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  // async updatePoll(req: Request, res: Response): Promise<void> {
  //   try {
  //     const poll = await this.pollService.updatePoll(req.params.id, req.body);
  //     if (!poll) {
  //       res.status(404).json({ error: 'Poll not found' });
  //       return;
  //     }
  //     res.status(200).json(poll);
  //   } catch (error) {
  //     res.status(500).json({ error: 'Failed to update poll' });
  //   }
  // }

  // Deleta uma enquete

  async deletePoll(req: Request, res: Response): Promise<void> {
    try {
      const poll = await this.pollService.deletePoll(req.params.id);
      if (!poll) {
        res.status(404).json({ error: 'Poll not found' });
        return;
      }
      res.status(200).json({ message: 'Poll deleted successfully' });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
