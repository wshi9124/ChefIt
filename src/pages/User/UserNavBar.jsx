import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function UserNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className="navbar" bg="light" variant="light">
        <Container>
          <Nav className="justify-content-start">
            <Nav.Link onClick={() => { navigate('/user'); }}>Home/Map</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link onClick={() => { navigate('/userrequests'); }}>My Requests/Edit Profile</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default UserNavBar;
