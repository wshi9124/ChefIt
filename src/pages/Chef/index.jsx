<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useEffect } from 'react';
import { useState } from 'react';
>>>>>>> a48224239834f23bfe12ff2131e7377eb1177465
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';

function Chef() {
  const [info, setInfo] = useState([]);

<<<<<<< HEAD
  fetch('http://localhost:9292/chef/info')
    .then((res) => res.json())
    .then((infoData) => {
      setInfo(infoData);
      console.log(infoData);
    });

=======
const [info, setInfo] = useState([])

useEffect(()=> {
  fetch('http://localhost:9292/chef/1')
  .then(res => res.json())
  .then(infoData => {
    setInfo(infoData)
    console.log(infoData)
  })
},[])
>>>>>>> a48224239834f23bfe12ff2131e7377eb1177465
  return (
    <>
      <Logo />
      <ChefNavBar />
<<<<<<< HEAD
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
=======
      <div className='chef-home'>
        <h1>Your Profile</h1>
        
          <div className='image-overlay-container'>
            <img className='rounded-image' src = "https://i.pinimg.com/originals/6b/e1/84/6be1847b56e3832a614699142d1e09d8.jpg" width="600" height="400"/>
            <div className='text-overlay-container'>
                <h2>Username</h2>
                <div>{info.username}</div>
            </div>
          </div>
            <div>
              <p>{info.first_name+" "+info.last_name}</p>

            </div>
            <div>

            </div>
        </div>
    </>
>>>>>>> a48224239834f23bfe12ff2131e7377eb1177465
  );
}

export default Chef;
