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
  const [cuisines, setCuisines] = useState([]);
  const { auth } = useContext(AuthContext);

  
  useEffect(()=> {
    fetch("http://localhost:9292/cuisines/1").then(resp=>resp.json()).then(setCuisines)
},[])
  console.log(cuisines)
  return (
    <>
    <ChefNavBar/>
    <Logo/>
    <div className='center-flex'>
      <div className="content-card">
        <div className="card">
          <div className="firstinfo"><img src="https://randomuser.me/api/portraits/lego/6.jpg"/>
          <div className="profileinfo">
            <h1>{`${auth.first_name} ${auth.last_name}`}</h1>
            <h3>{auth.username}</h3>
            <p>{`${auth.email} ${auth.phone}`}</p>
            <p className="bio">{auth.bio} </p>
            </div>
          </div>
        </div>
        <div className="badgescard"> {cuisines.map(cuisine=><span className="badge" style={{backgroundColor:"green"}} 
        key={cuisine.id}>{cuisine.name}</span>)} </div>
      </div>
    </div>
      <AddPictureModal id={auth.id}/>
      <EditChefProfileModal auth={auth}/>
      <ProfilePosts id = {auth.id}/>
    </>
  );
}

export default Chef;
