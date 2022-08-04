import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../pages/Login/AuthProvider';

function LogOutButton() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleLogOut = () => {
    setAuth({});
    navigate('/login');
  };

  return (
    <div>
      <button type="button" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default LogOutButton;
