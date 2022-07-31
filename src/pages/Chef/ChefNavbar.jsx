import React from 'react';
import { useNavigate } from 'react-router-dom';

function ChefNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>This is the Chef Nav Bar My Profile is chef in Routes</h2>
      <a onClick={() => { navigate('/chef'); }}>My Profile CAN BE CLICKED</a>
      <a onClick={() => { navigate('/chefrequests'); }}>Requests CAN BE CLICKED</a>
    </div>
  );
}
export default ChefNavBar;
