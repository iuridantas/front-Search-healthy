export type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  cpf: string;
};

export type UserInput = {
  name: string;
  email: string;
  password: string;
  cpf: string;
};

export type SignIn = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
  user: User;
};