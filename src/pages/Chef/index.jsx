import React, { useEffect, useState, useContext } from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';
import EditChefProfileModal from './EditChefProfileModal';
import AddPictureModal from './AddPictureModal';
import AuthContext from '../Login/AuthProvider';
import ProfilePosts from './ProfilePosts';

const deleteHeader = {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json',
  },
};

const img = 'https://media.istockphoto.com/photos/old-grunge-dark-textured-wooden-backgroundthe-surface-of-the-old-picture-id865432924?k=20&m=865432924&s=612x612&w=0&h=fCWAbNMq85WP8oWie-DtmZmDzJxV5c61rU9TmG2uPdk=';

function Chef() {
  const { auth } = useContext(AuthContext);

  const [cuisines, setCuisines] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/cuisines/1').then((resp) => resp.json()).then(setCuisines);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/posts/${auth.id}`).then((resp) => resp.json()).then(setPosts);
  }, []);

  function handleSetPost(post) {
    setPosts((post) => [...posts, post]);
    console.log(post);
  }
  function handleDeletePost(id) {
    const deletePost = posts.filter((post) => post.id !== id);
    setPosts(deletePost);
    fetch(`http://localhost:9292/posts/${id}`, { ...deleteHeader });
  }
  return (
    <>
      <ChefNavBar />
      <Logo />
      <div className="center-flex huge-gap">
        <img className="outer-profile-placement" width="350px" height="350px" src={img} />
        <div className="content-card">
          <div className="card">
            <div className="firstinfo">
              <div className="profile-image-container">
                <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
              </div>
              <div className="profileinfo">
                <h1>
                  <div className="center-flex">
                    {`${auth.first_name} ${auth.last_name}`}
                    <AddPictureModal handleSetPost={handleSetPost} id={auth.id} />
                    <EditChefProfileModal />
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
          <div className="badgescard">
            {' '}
            {cuisines.map((cuisine) => (
              <span
                className="badge"
                style={{ backgroundColor: 'green' }}
                key={cuisine.id}
              >
                {cuisine.name}
              </span>
            ))}
            {' '}
          </div>
        </div>
        <img className="outer-profile-placement" width="350px" height="350px" src={img} />
      </div>
      <hr />
      <ProfilePosts handleDeletePost={handleDeletePost} posts={posts} />
    </>
  );
}

export default Chef;
