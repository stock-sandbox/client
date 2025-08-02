export type UserResponse = {
  message: string;
  user: User;
};

export type User = {
  cash: number;
  email: string;
  id: string;
  nickname: string;
  createdAt: string;
  updatedAt: string;
};
