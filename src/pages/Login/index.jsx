import React, {
  useRef, useState, useEffect, useContext,
} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthProvider';
import CreateAccountModal from './CreateAccountModal';

function Login() {
  const navigate = useNavigate();

  const { auth, setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('customer');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [user, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`http://localhost:9292/${accountType.toLowerCase()}/login?username=${user}&password=${password}`)
      .then((response) => response.json())
      .then((userInfo) => {
        console.log(userInfo);
        if (userInfo.success === true && accountType === 'customer') {
          setAuth(userInfo.data);
          navigate('/user');
        } else if (userInfo.success === true && accountType === 'chef') {
          setAuth(userInfo.data);
          navigate('/chef');
        } else {
          setErrorMessage(userInfo.errorMessage);
          setUser('');
          setPassword('');
        }
      });
  };

  return (
    <section className="login">
      <div className="login-form">
        <div>
          <div className="login-img">
            <img src="images/chefitlogo.png" alt="chef it logo" className="login-logo" />
            <p ref={errRef} className={errorMessage ? 'errorMessage' : 'offscreen'} aria-live="assertive">{errorMessage}</p>
            <h1 className="loginHeader">Chef It</h1>
            <h2 className="loginHeader">Why cook, when you can chef it!</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Username"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-0"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                type="select"
                name="logintype"
                value={accountType}
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value="customer">Customer</option>
                <option value="chef">Chef</option>
                <label htmlFor="form-select">Type of User:</label>
              </select>
              <p />
              <div className="d-grid gap-2 mb-3">
                <button type="submit" className="btn btn-dark btn-lg border-0 rounded-0" value="Login">Login</button>
              </div>
              <p>Dont have an account?</p>
              <CreateAccountModal />
            </form>
            <p />
          </div>
        </div>
        <p />
      </div>
    </section>
  );
}
export default Login;
