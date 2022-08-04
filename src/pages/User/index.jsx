import React from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';
import UserHome from './UserHome';

function User() {
  return (
    <div>
      <Logo />
      <UserNavBar />
      <UserHome />
    </div>
  );
}
export default User;
