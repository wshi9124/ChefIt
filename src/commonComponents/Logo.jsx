import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();
  return (
    <div className="logo">
      <h1> Chef It This is the Header add pictures</h1>
      <h2>Your go to place to rent personal chefs</h2>
      <h2>
        Slogan: Why cook when you can chef it (we can think of something better
        later xd)
      </h2>
      <button type="button" onClick={() => { navigate('/login'); }}>Log Out</button>
      <button type="button" onClick={() => { navigate('/updateinfo'); }}>Update Personal Info</button>
    </div>
  );
}
export default Logo;
