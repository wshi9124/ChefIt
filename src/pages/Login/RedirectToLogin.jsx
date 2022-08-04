import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../commonComponents/Logo';
import AuthContext from './AuthProvider';

function RedirectToLogin() {
  const navigate = useNavigate();
  const { setAuth, setIsCustomerLogOn, setIsChefLog } = useContext(AuthContext);

  const navigateToLogin = () => {
    setAuth('');
    setIsCustomerLogOn(false);
    setIsChefLog(false);
    navigate('/login');
  };
  setTimeout(navigateToLogin, 2000);

  return (
    <>
      <Logo />
      <h1>404 Error or User is not Authenticated</h1>
    </>
  );
}

export default RedirectToLogin;
