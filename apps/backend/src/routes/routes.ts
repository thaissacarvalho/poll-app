import { Router } from "express";
import { PollController } from "../controllers/poll.controller";
import { UserController } from "../controllers/user.controller";
import { LoginController } from "../controllers/login.controller";

const pollController = new PollController();
const userController = new UserController();
const loginController = new LoginController();

export const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'Welcome to Poll API' });
});

// Login
router.post('/login', loginController.login);

// User
router.post('/create-user', userController.createUser);
router.get('/find-user/:id', userController.getUserById);
router.get('/find-users', userController.getAllUsers);
router.put('update-user/:id', userController.updateUser);
router.delete('/delete-user/:id', userController.deleteUser);

// Poll
router.post('/create-poll', pollController.createPoll);
router.get('/find-poll/:id', pollController.getPollById);
router.get('/find-polls', pollController.getAllPolls);
// router.put('update-poll/:id', pollController.updatePoll);
router.delete('/delete-poll/:id', pollController.deletePoll);

// Poll Option
router.post('/create-poll-option', );
router.get('/find-poll-option/:id', );
router.get('/find-poll-options', );
router.delete('/delete-poll-option/:id', );

// Vote
router.post('/create-vote', );
router.get('/find-vote/:id', );
router.get('/find-votes', );
router.put('update-vote/:id', );
router.delete('/delete-vote/:id', );

