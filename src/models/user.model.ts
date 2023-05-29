export type User = {
  username: string;
  email: string;
  password: string;
};

export const emptyUser: User = {
  username: "testuser",
  email: "user@test.com",
  password: "",
};
