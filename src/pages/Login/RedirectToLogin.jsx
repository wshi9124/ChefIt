import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../commonComponents/Logo';
import AuthContext from './AuthProvider';

function RedirectToLogin() {
  const navigate = useNavigate();
  const { setAuth, setIsCustomerLogOn, setIsChefLog } = useContext(AuthContext);

  useEffect(() => {
    const navigateToLogin = () => {
      setAuth('');
      setIsCustomerLogOn(false);
      setIsChefLog(false);
      navigate('/login');
    };
    const timeOut = setTimeout(navigateToLogin, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <Logo />
      <h1>404 Error or User is not Authenticated</h1>
    </>
  );
}

export default RedirectToLogin;
