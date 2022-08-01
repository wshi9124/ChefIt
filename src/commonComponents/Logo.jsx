import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo-container">
      <img src="images/chefitlogo.png" alt="chef it logo" />
      <h1> Chef It </h1>
    </div>
  );
}
export default Logo;
