import { User } from "@poll-app/libs";
import { UserModel } from "../core/models/user.model";
import { BcryptService } from "./hash.service";
import mongoose from "mongoose";

export class UserService {

  private bcryptService: BcryptService;
  private isValidObjectId(id: string): boolean {
    return mongoose.Types.ObjectId.isValid(id);
  }

  constructor() {
    this.bcryptService = new BcryptService();
  }

  async createUser(data: Partial<User>): Promise<User> {
    const hashedPassword = await this.bcryptService.hashPassword(data.password);

    const user = new UserModel({
      name: data.name,
      username: data.username,
      email: data.email,
      password: hashedPassword
    });

    return await user.save();
  }

  async getUserById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await UserModel.find();
  }

  async updateUser(id: string, updateUser: { name?: string, username?: string, email?: string, password?: string }): Promise<User | null> {
    if (updateUser.password) {
      updateUser.password = await this.bcryptService.hashPassword(updateUser.password);
    }

    // Verificar se o id é válido
    if (!this.isValidObjectId(id)) {
      throw new Error('Invalid user ID');
    }

    const user = await UserModel.findByIdAndUpdate(id, updateUser, {
      new: true,
      runValidators: true,
    }).exec();

    return user;
  }

  async deleteUser(id: string): Promise<User | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
