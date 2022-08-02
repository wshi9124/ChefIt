import React from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';
import { useState } from 'react';
import { useEffect } from 'react';


function ChefRequest() {

  const [requests, setRequests] = useState([])

useEffect(() => {
fetch('http://localhost:9292/chef/requests')
.then(res => res.json())
.then(jsonResult => {
  setRequests(jsonResult)
  console.log(jsonResult)
})
},[])
  

  return (
    <div>
      <Logo />
      <ChefNavBar />
      <h1 className='myrequesttext'> My Requests </h1>
      <p></p>
      <div className='requestContainer'>
        <div className='requestHolder'></div>
           <table className='table'>
               <thead className='th'>
                   <tr className='tr'>
                       <th className='th'>Request Date</th>
                       <th className='th'>Status</th>
                       <th className='th'>Created At</th>
                       <th className='th'>User</th>
                   </tr>
               </thead>
               <tbody>
                     {requests.map((item)=>{
                       return (
                        <tr>
                           <td className='td'>{item.request_date}</td>  
                           <td className='td'>{item.status}</td>  
                           <td className='td'>{item.created_at}</td>  
                           <td className='td'>{item.user_id}</td>
                          </tr>
                       )
                     })}
               </tbody>
            </table> 
    </div>
    </div>
  );
}

export default ChefRequest;
