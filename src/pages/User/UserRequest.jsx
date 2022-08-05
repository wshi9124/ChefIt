import React, { useContext } from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';
import AuthContext from '../Login/AuthProvider';
import LogOutButton from '../../commonComponents/LogOutButton';
import UserEditInfo from './UserEditInfo';

const img = 'https://media.istockphoto.com/photos/old-grunge-dark-textured-wooden-backgroundthe-surface-of-the-old-picture-id865432924?k=20&m=865432924&s=612x612&w=0&h=fCWAbNMq85WP8oWie-DtmZmDzJxV5c61rU9TmG2uPdk=';
const placeholder = 'https://idea7.co.uk/wp-content/uploads/2021/02/placeholder-250x250-1.png';

function UserRequest() {
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <Logo />
      <UserNavBar />
      <LogOutButton />
      <div className="center-flex huge-gap">
        <img className="outer-profile-placement" width="350px" height="350px" src={img} />
        <div className="content-card">
          <div className="card">
            <div className="firstinfo">
              <div className="profile-image-container">
                <img src={auth.prof_pic}/>
              </div>
              <div className="profileinfo">
                <h1>
                  <div className="center-flex">
                    {`${auth.first_name} ${auth.last_name}`}
                    <UserEditInfo auth={auth} />
                  </div>
                </h1>
                <h3>{auth.username}</h3>
                <p>{`${auth.email} ${auth.phone}`}</p>
                <p className="bio">
                  {auth.bio}
                  {' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="outer-profile-placement" width="350px" height="350px" src={img} />
      </div>
      <hr />
    </div>
  );
}

export default UserRequest;
