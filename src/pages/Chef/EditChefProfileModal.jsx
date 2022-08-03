import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditChefProfileModal() {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [price, setPrice] = useState('')
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
      e.preventDefault()
  }

  const handlePhone = (e) => {
      setPhone(e.target.value)
  }
  const handleEmail = (e) => {
      setEmail(e.target.value)
  }
  const handlePrice = (e) => {
      setPrice(e.target.value)
  }
  const handleLongitude = (e) => {
      setLongitude(e.target.value)
  }
  const handleLatitude = (e) => {
      setLatitude(e.target.value)
  }

  return (
      <div>
          <form onSubmit={handleSubmit} className='info-Change-Form'>
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
              placeholder="Phone Number"
              value={phone}
              onChange={handlePhone}></input>
          </div>
          <div className='editProfileInputs'>
          <label htmlFor="email">
              Email:
            </label>
          <input type="text"
              className="modal-edit-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}></input>
          </div>
          <div className='editProfileInputs'>
          <label htmlFor="price">
              Price:
            </label>
          <input type="text"
              className="modal-edit-control"
              id="price"
              placeholder="Price"
              value={price}
              onChange={handlePrice}></input>
          </div>
          <div className='editProfileInputs'>
          <label htmlFor="longitude">
              Longitude:
            </label>
           <input type="text"
              className="modal-edit-control"
              id="longitude"
              placeholder="Longitude"
              value={longitude}
              onChange={handleLongitude}></input>
          </div>
          <div className='editProfileInputs'>
          <label htmlFor="latitude">
              Latitude:
            </label>
           <input type="text"
              className="modal-edit-control"
              id="latitude"
              placeholder="latitude"
              value={latitude}
              onChange={handleLatitude}></input>
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