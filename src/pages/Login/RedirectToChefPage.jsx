import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../commonComponents/Logo';

function RedirectToChef() {
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToChef = () => {
      navigate('/chef');
    };
    const timeOut = setTimeout(navigateToChef, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <>
      <Logo />
      <h1>404 Error Page not found</h1>
    </>
  );
}

export default RedirectToChef;
