import React from 'react';

import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';

function User() {
  return (
    <div>
      <Logo />
      <UserNavBar />
      <h1>This is User Home Page</h1>
    </div>
  );
}

export default User;
