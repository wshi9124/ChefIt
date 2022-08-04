import React, { useEffect, useState } from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';
import EditChefProfileModal from './EditChefProfileModal';

function Chef() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/chef/1')
      .then((res) => res.json())
      .then((infoData) => {
        setInfo(infoData);
        console.log(infoData);
      });
  }, []);
  return (
    <>
      <Logo />
      <ChefNavBar />
      <div className="chef-home">
        <h1>Your Profile</h1>
        <EditChefProfileModal />
        <div className="image-overlay-container">
          <img className="rounded-image" src="https://img.freepik.com/free-photo/portrait-happy-male-chef-dressed-uniform_171337-5354.jpg?w=2000" width="400" height="300" />
          <div className="text-overlay-container">
            <div className="infoText">
              <h3>Username</h3>
              <p>{info.username}</p>
            </div>
            <div className="infoText">
              <h3>Full Name</h3>
              <p>{`${info.first_name} ${info.last_name}`}</p>
            </div>
            <div className="infoText">
              <h3>Password</h3>
              <p>{info.password}</p>
            </div>
            <div className="infoText">
              <h3>Phone Number</h3>
              <p>{info.phone}</p>
            </div>
            <div className="infoText">
              <h3>Email</h3>
              <p>{info.email}</p>
            </div>
            <div className="infoText">
              <h3>Location</h3>
              <p>{'Longitude:' + ` ${info.longitude} ` + 'Latitude:' + ` ${info.latitude}`}</p>
            </div>
            <div className="infoText">
              <h3>Your Price</h3>
              <p>{info.chef_price}</p>
            </div>
          </div>
        </div>

      </div>

    </>
  );
}

export default Chef;
