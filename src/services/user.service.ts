import { apiHandler } from ".";
import { User } from "../models/user.model";

export const userService = {
  list: () => apiHandler.get("users"),
  create: (user: User) => apiHandler.post("users", user),
};
