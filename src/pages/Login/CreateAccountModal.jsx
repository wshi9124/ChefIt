import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateAccountModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Account
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Type of Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Button onClick={() => { navigate('/chefsignup'); }}>Sign up as Chef</Button>
          </div>
          <Button onClick={() => { navigate('/customersignup'); }}>Sign up as a Customer</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateAccountModal;
