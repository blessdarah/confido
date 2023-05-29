import { User } from "../models/user.model";
import { userService } from "../services/user.service";

export const useUser = () => {
  const createUser = async (user: User) => {
    const response = await userService.create(user);
    return response.data;
  };
  return {
    createUser,
  };
};
