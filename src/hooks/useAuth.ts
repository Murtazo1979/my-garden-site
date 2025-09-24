// src/hooks/useAuth.ts
import { useState, useEffect } from "react";
import { loginUser, logoutUser, getCurrentUser } from "../services/authService";

export function useAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const login = async (username: string, password: string) => {
    const loggedInUser = await loginUser(username, password);
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  return {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    loading,
  };
}
