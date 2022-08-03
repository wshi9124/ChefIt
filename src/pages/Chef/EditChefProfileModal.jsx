import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditChefProfileModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  return (
      <div>
          <form>
    <div className="editButtonHolder">
        <Button variant="dark" onClick={handleShow}>
          Edit
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Your Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='editProfileInputs'>
          <label htmlFor="phoneNumber">
              Phone:
            </label>
           <input type="text"
              className="modal-edit-control"
              id="phone-number"
              placeholder="Phone Number"></input>
          </div>
          <div className='editProfileInputs'>
          <label htmlFor="email">
              Email:
            </label>
          <input type="text"
              className="modal-edit-control"
              id="email"
              placeholder="Email"></input>
          </div>
          <div className='editProfileInputs'>
          <label htmlFor="price">
              Price:
            </label>
          <input type="text"
              className="modal-edit-control"
              id="price"
              placeholder="Price"></input>
          </div>
          <p />
          <Button onClick={() => { navigate('/customersignup'); }}>Save</Button>
        </Modal.Body>
      </Modal>
            </form>
      </div>
  )
}

export default EditChefProfileModal