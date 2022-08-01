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
    <div className="d-grid gap-2 mb-3">
      <Button variant="primary" onClick={handleShow}>
        Sign up here!
      </Button>
      </div>
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