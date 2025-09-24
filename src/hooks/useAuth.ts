// src/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { login, logout, getCurrentUser } from "../services/authService";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    const loggedUser = await login(email, password);
    setUser(loggedUser);
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return { user, loading, handleLogin, handleLogout };
}
