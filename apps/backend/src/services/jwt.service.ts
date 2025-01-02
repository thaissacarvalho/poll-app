import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET;

export class JwtService {
  async generateToken(payload: object) {
    return await jwt.sign(payload, jwtSecret, { expiresIn: '7d' });
  }

  async verifyToken(token: string) {
    try {
      return await jwt.verify(token, jwtSecret);
    } catch (error) {
      return error.message;
    }
  }
}

