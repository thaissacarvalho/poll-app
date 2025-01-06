import { Request, Response } from 'express';
import { VoteService } from '../services/vote.service';

export class VoteController {

  private voteService: VoteService;

  constructor() {
    this.voteService = new VoteService();
  }

  async createVote(req: Request, res: Response) {
    try {
      const { pollId, userId, option } = req.body;
      const vote = await this.voteService.createVote({ pollId, userId, option });
      res.status(201).json(vote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getVoteById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const vote = await this.voteService.getVoteById(id);
      if (!vote) {
        return res.status(404).json({ message: 'Voto não encontrado.' });
      }
      res.status(200).json(vote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllVotes(req: Request, res: Response) {
    try {
      const votes = await this.voteService.getAllVotes();
      res.status(200).json(votes);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  // async updateVote(req: Request, res: Response) {
  //   const { id } = req.params;
  //   const updateData = req.body;
  //   try {
  //     const updatedVote = await this.voteService.updateVote(id, updateData);
  //     res.status(200).json(updatedVote);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // }

  async deleteVote(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedVote = await this.voteService.deleteVote(id);
      if (!deletedVote) {
        return res.status(404).json({ message: 'Voto não encontrado.' });
      }
      res.status(200).json(deletedVote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
