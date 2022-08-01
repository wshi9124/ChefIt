import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateAccountModal from './CreateAccountModal';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login-form">
        <div>
          <div className="login-img">
            <img src="images/chefitlogo.png" alt="chef it logo" className="login-logo" />
            <h1>Chef It</h1>
            <h2>Your go to place to hire personal chefs</h2>
            <form>
              <p>Username:</p>
              <input type="text" name="" placeholder="Enter Username" />
              <p>Password:</p>
              <input type="password" name="" placeholder="Enter Password" />
              <label htmlFor="logintype">Type of User:</label>
              <select type="select" name="logintype">
                <option value="customer">Customer</option>
                <option value="user">Chef</option>
              </select>
              <input type="submit" name="" value="Login" />
              <p>Dont have a account?</p>
              <CreateAccountModal />
            </form>
            <button type="button" onClick={() => { navigate('/user'); }}>Login as User </button>
            <button type="button" onClick={() => { navigate('/chef'); }}>Login as Chef</button>
            <h1>Why cook when you can chef it!</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
