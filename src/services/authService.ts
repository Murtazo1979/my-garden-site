// src/services/authService.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const authService = {
  async login(email: string, password: string): Promise<LoginResponse> {
    const { data } = await axios.post(${API_URL}/auth/login, { email, password });
    localStorage.setItem("token", data.token);
    return data;
  },

  async register(name: string, email: string, password: string): Promise<LoginResponse> {
    const { data } = await axios.post(${API_URL}/auth/register, { name, email, password });
    localStorage.setItem("token", data.token);
    return data;
  },

  logout() {
    localStorage.removeItem("token");
  },

  getToken(): string | null {
    return localStorage.getItem("token");
  },
};
