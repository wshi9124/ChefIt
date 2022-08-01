import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function UserNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/user">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <h2>This is the User Nav Bar Home is user in Routes</h2>
      <a onClick={() => { navigate('/user'); }}>Home CAN BE CLICKED</a>
      <a onClick={() => { navigate('/userrequests'); }}>Requests CAN BE CLICKED</a>
    </div>
  );
}
export default UserNavBar;
