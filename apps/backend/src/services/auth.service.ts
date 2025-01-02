import { UserModel } from "../core/models/user.model";
import { BcryptService } from "./hash.service";
import { JwtService } from "./jwt.service";

export class AuthService {

    private bcryptService: BcryptService;
    private jwtService: JwtService;
  
    constructor() {
      this.bcryptService = new BcryptService();
      this.jwtService = new JwtService();
    }

  async login(identifier: string, password: string): Promise<any> {
    const user = await UserModel.findOne({
      $or: [{ username: identifier }, { email: identifier }],
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const isPasswordValid = await this.bcryptService.comparePassowrd(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Username/email ou senha inválidos.');
    }

    return this.jwtService.generateToken({ id: user._id, username: user.username });
  }
}
