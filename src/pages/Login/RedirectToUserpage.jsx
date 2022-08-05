import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../commonComponents/Logo';

function RedirectToUser() {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/user');
  };
  setTimeout(navigateToLogin, 2000);

  return (
    <>
      <Logo />
      <h1>404 Error Page not found</h1>
    </>
  );
}

export default RedirectToUser;
