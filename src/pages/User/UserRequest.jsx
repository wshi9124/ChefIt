import React from 'react';
import Logo from '../../commonComponents/Logo';
import UserNavBar from './UserNavBar';
import { useEffect } from 'react';
import {useState} from 'react';

function UserRequest() {

  
  return (
    <div>
      <Logo />
      <UserNavBar />
      <h1> Create new request</h1>
      <form className='userRequestForm'>
         <div className="form-floating mb-3">
           <input type="username" className="form-control rounded-0" placeholder="Username" id="floatingInput" />
           <label for="floatingInput">Username</label>
         </div>

          <div className="form-floating mb-3">
            <input type="username" className="form-control rounded-0" placeholder="Password" id="floatingPassword" />
            <label for="floatingInput"></label>
         </div>

         <button className='button' type='submit'>Submit Request</button>

      </form>
    </div>
  );
}

export default UserRequest;
