import { User } from "@poll-app/libs";
import { UserModel } from "../core/models/user.model";

export class UserService {
  async createUser(data: Partial<User>): Promise<User> {
    const user = new UserModel(data);
    return await user.save();
  }

  async getUserById(id: string): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return await UserModel.find();
  }

  async updateUser(id: string, updateData: Partial<User>): Promise<User> {
    return await UserModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteUser(id: string): Promise<User | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
