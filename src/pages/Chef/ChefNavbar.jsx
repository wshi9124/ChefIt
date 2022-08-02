import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap';

function ChefNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className='navbar' bg="light" variant="light">
        <Container>
          <Nav className='justify-content-start'>
            <Nav.Link onClick={() => { navigate('/chef') }}>My Profile</Nav.Link>
          </Nav>
          <Nav className='justify-content-between'>
            <Nav.Link onClick={() => { navigate('/chefrequests')}}>My Portfolio / Requests</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Log Out</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default ChefNavBar;
