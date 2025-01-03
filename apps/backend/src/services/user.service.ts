import { User } from "@poll-app/libs";
import { UserModel } from "../core/models/user.model";
import { BcryptService } from "./hash.service";

export class UserService {

  private bcryptService: BcryptService;

  constructor(){
    this.bcryptService = new BcryptService();
  }

  async createUser(data: Partial<User>): Promise<User> {
    const hashedPassword = this.bcryptService.hashPassword(data.password);
    
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

  async updateUser(id: string, updateUser: Partial<User>): Promise<User> {
    if (updateUser.password) {
      updateUser.password = await this.bcryptService.hashPassword(updateUser.password);
    }

    const user = await UserModel.findByIdAndUpdate(id, updateUser, {
      new: true, 
      runValidators: true, 
    });

    return user;
  }

  async deleteUser(id: string): Promise<User | null> {
    return await UserModel.findByIdAndDelete(id);
  }
}
