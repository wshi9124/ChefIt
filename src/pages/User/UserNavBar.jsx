import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>This is the User Nav Bar Home is user in Routes</h2>
      <a onClick={() => { navigate('/user'); }}>Home CAN BE CLICKED</a>
      <a onClick={() => { navigate('/userrequests'); }}>Requests CAN BE CLICKED</a>
    </div>
  );
}
export default UserNavBar;
