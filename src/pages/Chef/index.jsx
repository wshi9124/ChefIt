import React, { useState } from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';

function Chef() {
  const [info, setInfo] = useState([]);

  fetch('http://localhost:9292/chef/info')
    .then((res) => res.json())
    .then((infoData) => {
      setInfo(infoData);
      console.log(infoData);
    });

  return (
    <div>
      <Logo />
      <ChefNavBar />
      <h1>Your Profile</h1>
      <div>
        <div>
          <h2>Username</h2>
          <div>{info.username}</div>
        </div>
        <div />
        <div />
      </div>
    </div>
  );
}

export default Chef;
