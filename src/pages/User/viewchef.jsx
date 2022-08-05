import React, { useEffect, useState } from 'react';
import Logo from '../../commonComponents/Logo';
import { useParams } from 'react-router-dom';
import UserNavBar from './UserNavBar';
import RequestModal from './requestmodal';
import ProfilePosts from '../Chef/ProfilePosts';
import PostCard from '../Chef/PostCard';

const img = 'https://media.istockphoto.com/photos/old-grunge-dark-textured-wooden-backgroundthe-surface-of-the-old-picture-id865432924?k=20&m=865432924&s=612x612&w=0&h=fCWAbNMq85WP8oWie-DtmZmDzJxV5c61rU9TmG2uPdk=';

function ViewChef() {

  const [posts, setPosts] = useState([]);
  const [info, setInfo] = useState([]);
  const chefId = useParams()

  const [cuisines, setCuisines] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  console.log(cuisines)
  useEffect(() => {
    fetch('http://localhost:9292/chef/'+chefId.chefId)
      .then((res) => res.json())
      .then((infoData) => {
        setInfo(infoData);
        console.log(infoData);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:9292/cuisines/'+chefId.chefId).then((resp) => resp.json()).then(setCuisines);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/posts/${chefId.chefId}`).then((resp) => resp.json()).then(setPosts);
  }, []);
  return (
    <>
      <Logo />
      <UserNavBar/>
      <div className="center-flex huge-gap">
        <img className="outer-profile-placement" width="350px" height="350px" src={img} />
        <div className="content-card">
          <div className="card">
            <div className="firstinfo">
              <div className="profile-image-container">
                <img src = {info.prof_pric} />
              </div>
              <div className="profileinfo">
                <h1>
                  <div className="center-flex">
                    {`${info.first_name} ${info.last_name}`}
                  </div>
                </h1>
                <h3>{info.username}<b style={{color:"black",marginLeft:"15px"}}>${info.chef_price}0</b></h3>
                <p>{`${info.email} ${info.phone}`}</p>
                <p className="bio">
                  {info.bio}
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
          <button type="button change-z "onClick={() => setModalShow(true)}>More</button>
          <RequestModal
            fullName={`${info.first_name} ${info.last_name}`}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
     
        </div>
        <img className="outer-profile-placement" width="350px" height="350px" src={img} />
      </div>
      <hr />
      <ProfilePosts posts={posts} />
    </>
  );
}

export default ViewChef;
