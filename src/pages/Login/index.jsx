import React from 'react';
import { useNavigate } from 'react-router-dom';
import CreateAccountModal from './CreateAccountModal';
function Login() {
  const navigate = useNavigate();
  return (
    <section className="login">
      <div className="login-form">
        <div>
          <div className="login-img">
            <img src="images/chefitlogo.png" alt="chef it logo" className="login-logo" />
            <h1 className="loginHeader">Chef It</h1>
            <h2 className="loginHeader">Why cook, when you can chef it!</h2>
            <form>
              <div className="form-floating mb-3">
              <input type="username" className="form-control rounded-0" placeholder="Username" id="floatingInput" />
              <label for="floatingInput">Username</label>
              </div>
              <div className="form-floating mb-3">
              <input type="username" className="form-control rounded-0" placeholder="Password" id="floatingPassword" />
              <label for="floatingInput">Password</label>
              </div>
              <select className="form-select" aria-label="Default select example" type="select" name="logintype">
                <option value="customer">Customer</option>
                <option value="user">Chef</option>
                <label htmlFor="form-select">Type of User:</label>
              </select>
              <div className="d-grid gap-2 mb-3">
              <button type="button" className="btn btn-dark btn-lg border-0 rounded-0" value="Login">Login</button>
              </div>
              <p>Dont have an account?</p>
              <CreateAccountModal />
            </form>
            <button type="button" onClick={() => { navigate('/user'); }}>Login as User </button>
            <button type="button" onClick={() => { navigate('/chef'); }}>Login as Chef</button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;