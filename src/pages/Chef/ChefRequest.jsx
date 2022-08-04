import React, { useState, useEffect } from 'react';
import Logo from '../../commonComponents/Logo';
import ChefNavBar from './ChefNavbar';
import LogOutButton from '../../commonComponents/LogOutButton';
import MoreInfoPopup from './moreinfopopup';

function ChefRequest() {
  const [modalShow, setModalShow] = React.useState(false);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/chef/requests/4')
      .then((res) => res.json())
      .then((jsonResult) => {
        setRequests(jsonResult);
      });
  }, []);
  console.log(requests)
  return (
    <div>
      <Logo />
      <ChefNavBar />
      <LogOutButton />
      <h1 className="myrequesttext"> My Requests </h1>
      <p />
      {/* <div className='image-overlay-container'>

        <img className='rounded-image' src = "https://i.pinimg.com/originals/6b/e1/84/6be1847b56e3832a614699142d1e09d8.jpg" width="600" height="400"/>
        <div className='text-overlay-container'>   */}
      <div className="requestContainer">
        {/* <div className='requestHolder'></div> */}
        <table className="table">
          <thead className="th">
            <tr className="tr">
              <th className="th">Request Date</th>
              <th className="th">Status</th>
              <th className="th">Created At</th>
              <th className="th">User</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((item) => (
              <tr key={item.id}>
                <td className="td">
                  {
                                new Date(item.request_date).toLocaleString('en-US', { timeZone: 'EST' })
                              }
                </td>
                <td style={{ color: item.status === 'Declined' ? 'red' : 'green' }} className="td">{item.status}</td>
                <td className="td">
                  {
                                new Date(item.created_at).toLocaleString('en-US', { timeZone: 'EST' })
                              }
                </td>
                <td className="td">
                  {`${item.user.first_name} ${item.user.last_name}`}
                  <button type="button" onClick={() => setModalShow(true)}>More</button>
                  <MoreInfoPopup
                    show={modalShow}
                    fullname={`${item.user.first_name} ${item.user.last_name}`}
                    user_comments={item.user.user_comments}
                    onHide={() => setModalShow(false)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ChefRequest;
