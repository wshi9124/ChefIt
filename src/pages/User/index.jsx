import React from 'react';

import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';

function User() {
  return (
    <div>
      <Logo />
      <h1>This is User Page</h1>
      <UserNavBar />
    </div>
  );
}

export default User;
