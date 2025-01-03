import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { checkEmail, checkUsername } from "../utils/checkUsernameOrEmail.utils";

export class UserController {

  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, username, email, password } = req.body;

      const emailExists = checkEmail(email);
      const usernameExists = checkUsername(username);

      if (emailExists) {
        res.status(409).json('Email already exist');
      }

      if (usernameExists) {
        res.status(409).json('Username already exist');
      }

      const user = await this.userService.createUser({ name, username, email, password });

      res.status(201).json({
        message: 'User created successfully!',
        user
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.getUserById(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const updates = req.body;

      if (!updates || Object.keys(updates).length === 0) {
        res.status(400).json({ message: 'No fields provided for update.' });
        return;
      }

      if (updates.email) {
        const emailExists = await checkEmail(updates.email);
        if (emailExists) {
          res.status(409).json({ message: 'Email already exists.' });
          return;
        }
      }  

      if (updates.username) {
        const usernameExists = await checkUsername(updates.username);
        if (usernameExists) {
          res.status(409).json({ message: 'Username already exists.' });
          return;
        }
      }

      const updateUser = await this.userService.updateUser(id, updates);
      
      if (!updateUser) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      
      res.status(200).json({
        message: 'User updated successfully',
        updateUser
      });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.userService.deleteUser(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
