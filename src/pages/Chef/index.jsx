import React, { useEffect, useState, useContext } from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';
import EditChefProfileModal from './EditChefProfileModal';
import AddPictureModal from './AddPictureModal';
import AuthContext from '../Login/AuthProvider';
import ProfilePosts from './ProfilePosts';
const img = "https://media.istockphoto.com/photos/old-grunge-dark-textured-wooden-backgroundthe-surface-of-the-old-picture-id865432924?k=20&m=865432924&s=612x612&w=0&h=fCWAbNMq85WP8oWie-DtmZmDzJxV5c61rU9TmG2uPdk="
const placeholder = "https://idea7.co.uk/wp-content/uploads/2021/02/placeholder-250x250-1.png"
function Chef() {
  const [info, setInfo] = useState([]);
  const { auth } = useContext(AuthContext);
  console.log(auth)
  return (
    <>
    <ChefNavBar/>
    <Logo/>
      <div className="image-overlay-container">
            <img src={img} alt='background'/>
            <div className="text-overlay-container">
              <div className='header-info-card'>
                  <div className='info-popup-item large-gap'>
                    <img className='rounded-image' src={placeholder} width="150px" height="150px"/>
                    <h4>Username</h4>
              </div>
              <div className="text-inner-container">
                <div className='info-popup-item large-gap'>
                  <p> Full name</p>
                  <p> Email </p>
                  <p> Phone number</p>
                </div>
                <p> Location </p>
                <p> Price </p>
              </div>
            </div>
          </div>
      </div>
      <EditChefProfileModal auth={auth}/>
      <AddPictureModal id={auth.id}/>
      <ProfilePosts id = {auth.id}/>
    </>
  );
}

export default Chef;
