export type User = {
  username: string;
  email: string;
  password: string;
  status: string;
  avatar: string;
};

export const emptyUser: User = {
  username: "",
  email: "",
  password: "",
  status: "",
  avatar: "",
};
