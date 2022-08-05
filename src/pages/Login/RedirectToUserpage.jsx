import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../commonComponents/Logo';

function RedirectToUser() {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToUser = () => {
      navigate('/user');
    };
    const timeOut = setTimeout(navigateToUser, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <Logo />
      <h1>404 Error Page not found</h1>
    </>
  );
}

export default RedirectToUser;
