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

export type Profiles = {
  _id: string;
  name: string;
  image: string;
  tall: number;
  weigth: number;
  objective: string;
  gym: string;
  services: string[];
  personalsIds: string[];
  studentsIds: string[];
};

export type ProfilesInput  = {
  name: string;
  image: string;
  tall: number;
  weigth: number;
  objective: string;
  gym: string;
  services: string[];
  personalsIds: string[];
  studentsIds: string[];
};