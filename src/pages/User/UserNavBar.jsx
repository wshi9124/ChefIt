import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

function UserNavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar className='navbar' bg="light" variant="light">
        <Container>
          <Nav className='justify-content-start'>
            <Nav.Link onClick={() => { navigate('/user') }}>Chef it</Nav.Link>
          </Nav>
          <Nav className='justify-content-between'>
            <Nav.Link onClick={() => { navigate('/userrequests')}}>My Requests</Nav.Link>
          </Nav>
          <Nav className='justify-content-between'>
            <Nav.Link onClick={() => { navigate('/userhome')}}>Home</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Log Out</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default UserNavBar;
