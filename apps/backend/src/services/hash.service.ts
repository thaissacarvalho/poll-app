import bcrypt from 'bcrypt';

export class BcryptService {
  private readonly saltRounds = 10;

  async hashPassword(password: string) {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async comparePassowrd(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
