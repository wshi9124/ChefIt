import React, { useEffect, useState, useContext } from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';
import EditChefProfileModal from './EditChefProfileModal';
import AuthContext from '../Login/AuthProvider';

function Chef() {
  const [info, setInfo] = useState([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    fetch('http://localhost:9292/chef/1')
      .then((res) => res.json())
      .then((infoData) => {
        setInfo(infoData);
        console.log(infoData);
      });
  }, []);

  console.log('auth', auth);

  return (
    <>
      <Logo />
      <ChefNavBar />
      <div className="float-container">

        <div className="float-child">
          <h1>Your Profile</h1>
          <EditChefProfileModal auth={auth} />
          <div className="image-overlay-container">
            <img className="rounded-image" src={auth.prof_pic} width="400" height="300" placeholder="Chef Profile Pic" />
            <div className="text-overlay-container">
              <div className="infoText">
                <h3>Username</h3>
                <p>{auth.username}</p>
              </div>
              <div className="infoText">
                <h3>Full Name</h3>
                <p>{`${auth.first_name} ${auth.last_name}`}</p>
              </div>
              <div className="infoText">
                <h3>Price</h3>
                <p>{auth.chef_price}</p>
              </div>
              <div className="infoText">
                <h3>Phone Number</h3>
                <p>{auth.phone}</p>
              </div>
              <div className="infoText">
                <h3>Email</h3>
                <p>{auth.email}</p>
              </div>
              <div className="infoText">
                <h3>Location</h3>
                <p>{'Longitude:' + ` ${auth.longitude} ` + 'Latitude:' + ` ${auth.latitude}`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="float-child">
          <h1> Your Portfolio</h1>
          <div className="float-container">
            <div className="float-child" />
            <div className="float-child" />

          </div>
        </div>

      </div>

    </>
  );
}

export default Chef;
