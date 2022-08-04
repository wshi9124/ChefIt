import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthContext from './pages/Login/AuthProvider';
import Login from './pages/Login';
import User from './pages/User';
import Chef from './pages/Chef';
import CreateUserAccount from './pages/Login/CreateUserAccount';
import CreateChefAccount from './pages/Login/CreateChefAccount';
import UserRequest from './pages/User/UserRequest';
import ChefRequest from './pages/Chef/ChefRequest';
import ViewChef from './pages/User/viewchef';
import RedirectToLogin from './pages/Login/RedirectToLogin';

import './app.css';

function App() {
  const { isCustomerLogOn, isChefLogOn } = useContext(AuthContext);
  if (isCustomerLogOn) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customersignup" element={<CreateUserAccount />} />
        <Route path="/chefsignup" element={<CreateChefAccount />} />
        <Route path="/user" element={<User />} />
        <Route path="/userrequests" element={<UserRequest />} />
        <Route path="/viewchef" element={<ViewChef />} />
        <Route path="*" element={<RedirectToLogin />} />
      </Routes>
    );
  }
  if (isChefLogOn) {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customersignup" element={<CreateUserAccount />} />
        <Route path="/chefsignup" element={<CreateChefAccount />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/chefrequests" element={<ChefRequest />} />
        <Route path="*" element={<RedirectToLogin />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/customersignup" element={<CreateUserAccount />} />
      <Route path="/chefsignup" element={<CreateChefAccount />} />
      <Route path="*" element={<RedirectToLogin />} />
    </Routes>
  );
}

export default App;
