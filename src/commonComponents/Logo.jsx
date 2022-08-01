import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo-container">
      <img src="images/chefitlogo.png" alt="chef it logo" />
      <h1> Chef It </h1>
      <button type="button" onClick={() => { navigate('/login'); }}>Log Out</button>
      <button type="button" onClick={() => { navigate('/updateinfo'); }}>Update Personal Info</button>
    </div>
  );
}
export default Logo;
