import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [isCustomerLogOn, setIsCustomerLogOn] = useState(false);
  const [isChefLogOn, setIsChefLog] = useState(false);

  useEffect(() => {
    setAuth(localStorage.getItem('authLocalStorage'));
    setIsCustomerLogOn(JSON.parse(localStorage.getItem('isCustomerStorage')));
    setIsChefLog(JSON.parse(localStorage.getItem('isChefStorage')));
  }, []);

  return (
    <AuthContext.Provider value={{
      auth, setAuth, isCustomerLogOn, setIsCustomerLogOn, isChefLogOn, setIsChefLog,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
