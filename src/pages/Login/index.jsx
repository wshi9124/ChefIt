import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateAccountModal from './CreateAccountModal';
import {useState} from 'react'

function Login() {
  const navigate = useNavigate();

  const [login, setLogin] = useState(true)

const changeLogin = (e) => {
  setLogin(false)
}
console.log(setLogin)
  
  return (
    <section className="login">
      <div className="login-form">
        <div>
          <div className="login-img">
            <img src="images/chefitlogo.png" alt="chef it logo" className="login-logo" />
            <h1 className="loginHeader">Chef It</h1>
            <h4 className="loginHeader">Why cook, when you can chef it!</h4>
            <form>
              <div className="form-floating mb-3">
              <input type="username" className="form-control rounded-0" placeholder="Username" id="floatingInput" />
              <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
              <input type="username" className="form-control rounded-0" placeholder="Password" id="floatingPassword" />
              <label for="floatingInput">Password</label>
              </div>
              <select className="form-select" aria-label="Default select example" type="select" name="logintype" onChange={changeLogin}>
                <option value="customer">Customer</option>
                <option value="user">Chef</option>
                <label htmlFor="form-select">Type of User:</label>
              </select>
              <p></p>
              <div className="d-grid gap-2 mb-3">
              <button type="button" onClick={() => {setLogin ? navigate('/user') 
                 :
               navigate('/chef');
              }} className="btn btn-dark btn-lg border-0 rounded-2" value="Login">Login</button>
              </div>
              <p>Dont have an account?</p>
              <CreateAccountModal />
            </form>
            <button type="button" onClick={() => { navigate('/user'); }}>Login as User </button>
            <button type="button" onClick={() => { navigate('/chef'); }}>Login as Chef</button>
            <p></p>
          </div>
        </div>
        <p></p>
      </div>
    </section>
  );
}
export default Login;