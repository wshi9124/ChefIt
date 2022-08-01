import React from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';

function UserRequest() {
  return (
    <div>
      <Logo />
      <UserNavBar />
      <h1> This is the User Profile Page </h1>
    </div>
  );
}

export default UserRequest;
