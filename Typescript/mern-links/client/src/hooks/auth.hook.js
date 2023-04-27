import { useCallback, useEffect, useState } from "react";
const storageName = "userData";

export const useAuth = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(
      storageName,
      JSON.stringify({ userId: id, token: jwtToken })
    );
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(storageName));
    if (storageData && storageData.token) {
      login(storageData.token, storageData.userId);
    }
  }, [login]);
  return { login, logout, token, userId };
};
