import { Router } from "express";
import { PollController } from "../controllers/poll.controller";
import { UserController } from "../controllers/user.controller";
import { LoginController } from "../controllers/login.controller";
import { VoteController } from "../controllers/vote.controller";

const pollController = new PollController();
const userController = new UserController();
const loginController = new LoginController();
const voteController = new VoteController();

export const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to Poll API' });
});

// Login
router.post('/login', loginController.login);

// User
router.post('/create-user', userController.createUser.bind(userController));
router.get('/find-user/:id', userController.getUserById.bind(userController));
router.get('/find-users', userController.getAllUsers.bind(userController));
router.put('update-user/:id', userController.updateUser.bind(userController));
router.delete('/delete-user/:id', userController.deleteUser.bind(userController));

// Poll
router.post('/create-poll', pollController.createPoll.bind(pollController));
router.get('/find-poll/:id', pollController.getPollById.bind(pollController));
router.get('/find-polls', pollController.getAllPolls.bind(pollController));
router.get('/find-expired-polls', pollController.getExpiredPolls.bind(pollController));
// router.put('update-poll/:id', pollController.updatePoll.bind(pollController));
router.delete('/delete-poll/:id', pollController.deletePoll.bind(pollController));

// Vote
router.post('/create-vote', voteController.createVote.bind(voteController));
router.get('/find-vote/:id', voteController.getVoteById.bind(voteController));
router.get('/find-votes', voteController.getAllVotes.bind(voteController));
router.delete('/delete-vote/:id', voteController.deleteVote.bind(voteController));

