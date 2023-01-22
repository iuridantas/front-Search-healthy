export type User = {
  id: string;
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
  id: string;
  name: string;
  image: string;
  objective: string;
  gym: string;
  personalsIds?: string[];
  studentsIds?: string[];
};

export type ProfilesInput  = {
  name: string;
  image: string;
  objective: string;
  gym: string;
  personalsIds?: string[];
  studentsIds?: string[];
};