import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../pages/Login/AuthProvider';

function LogOutButton() {
  const navigate = useNavigate();
  const { setAuth, setIsCustomerLogOn, setIsChefLog } = useContext(AuthContext);

  const handleLogOut = () => {
    setAuth({});
    setIsCustomerLogOn(false);
    setIsChefLog(false);
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div>
      <button type="button" className="logOutButton" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}

export default LogOutButton;
