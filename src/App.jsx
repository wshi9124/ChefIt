import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import User from './pages/User';
import Chef from './pages/Chef';
import CreateUserAccount from './commonComponents/CreateUserAccount';
import UpdatePersonalInfo from './commonComponents/UpdatePersonalInfo';
import Request from './commonComponents/Request';
import UserHome from './pages/User/UserHome';
import './app.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/customersignup" element={<CreateUserAccount />} />
      <Route path="/chefsignup" element={<CreateUserAccount />} />
      <Route path="/updateinfo" element={<UpdatePersonalInfo />} />
      {/* <Route path="/updateuserinfo" element={<UpdatePersonalInfo />} />
      <Route path="/updatechefinfo" element={<UpdatePersonalInfo />} /> */}
      <Route path="/user" element={<User />} />
      <Route path="/chef" element={<Chef />} />
      <Route path="/userrequests" element={<Request />} />
      <Route path="/chefrequests" element={<Request />} />
      <Route path="/map" element={<UserHome />} />
      <Route path="*" element={<Login />} />
    </Routes>

  );
}

export default App;
