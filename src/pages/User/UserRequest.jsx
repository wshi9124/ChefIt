import React, { useEffect, useState } from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';
import LogOutButton from '../../commonComponents/LogOutButton';

function UserRequest() {
  return (
    <div>
      <Logo />
      <UserNavBar />
      <LogOutButton />
    </div>
  );
}

export default UserRequest;
