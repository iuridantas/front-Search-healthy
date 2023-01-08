import { LoginRequest } from "../types/requests";

export const api = {
    signIn: async ({ email, password }: LoginRequest) => {
    const response = await fetch("http://localhost:3000/api/docs#/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  },
};