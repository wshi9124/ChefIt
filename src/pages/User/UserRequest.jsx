import React, { useEffect, useState } from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';
import LogOutButton from '../../commonComponents/LogOutButton';

function UserRequest() {
  return (
    <div>
      <Logo />
      <UserNavBar />
      <div>
        <h1>User Profile</h1>
        <p>Username</p>
        <p>Image</p>
        <p>First Name</p>
        <p>Last Name</p>
        <p>Phone</p>
        <p>Email</p>
        <p>Longitude</p>
        <p>Latitude</p>
      </div>
      <LogOutButton />
    </div>
  );
}

export default UserRequest;
