import React, { useContext } from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';
import AuthContext from '../Login/AuthProvider';
import LogOutButton from '../../commonComponents/LogOutButton';
import UserEditInfo from './UserEditInfo';

function UserRequest() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <Logo />
      <UserNavBar />
      <LogOutButton />
      <div>
        <h1>User Profile</h1>
        <UserEditInfo />
        <p>Username</p>
        <p>{auth.username}</p>
        <p>Image</p>
        <p>Full Name</p>
        <p>
          {auth.first_name}
          {' '}
          {auth.last_name}
        </p>
        <p>Phone</p>
        <p>{auth.phone}</p>
        <p>Email</p>
        <p>{auth.email}</p>
        <p>Location</p>
        <p>
          latitude
          {' '}
          {auth.latitude}
          {' '}
          longitude
          {' '}
          {auth.longitude}
        </p>
      </div>
    </div>
  );
}

export default UserRequest;
