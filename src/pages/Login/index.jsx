import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateAccountModal from './CreateAccountModal';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="loginform">
        <h1>Chef It</h1>
        <h1>Your go to place to hire personal chefs</h1>
        <h1>Why cook when you can chef it!</h1>
        <button type="button" onClick={() => { navigate('/user'); }}>Login as User </button>
        <button type="button" onClick={() => { navigate('/chef'); }}>Login as Chef</button>
        <CreateAccountModal />
      </div>
    </div>
  );
}

export default Login;
