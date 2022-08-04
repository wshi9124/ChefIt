import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [isCustomerLogOn, setIsCustomerLogOn] = useState(false);
  const [isChefLogOn, setIsChefLog] = useState(false);

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
