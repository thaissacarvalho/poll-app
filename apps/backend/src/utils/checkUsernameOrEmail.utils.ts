import { UserModel } from "../core/models/user.model";

export const checkUsername = async (username: string) => {
  try {
      const existingUser = await UserModel.findOne({ username });
      return !!existingUser;
  } catch (error) {
      console.error({ message: error.message });
  }
}

export const checkEmail = async (email: string) => {
  try {
      const existingEmail = await UserModel.findOne({ email });
      return !!existingEmail;
  } catch (error) {
      console.error({ message: error.message });
  }
}