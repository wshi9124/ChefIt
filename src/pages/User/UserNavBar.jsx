import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function UserNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={() => { navigate('/user'); }}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => { navigate('/userrequests'); }}>My Profile / Requests</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
export default UserNavBar;
