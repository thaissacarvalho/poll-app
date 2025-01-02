import { Request, Response } from 'express';  
import { AuthService } from '../services/auth.service';

export class LoginController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  async login(req: Request, res: Response){
    const { identifier, password } = req.body;

    if(!identifier || !password) {
      return 'Credentials invalid. Write identifier and password, please.'
    }

    try {
      const token = await this.authService.login(identifier, password);
      res.status(200).json({ token });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
}