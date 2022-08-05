import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../Login/AuthProvider';

function EditChefProfileModal({ auth }) {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const { id } = auth;

  console.log(id);

  function handleSubmit(e) {
    e.preventDefault();

    const newData = {
      phone, email, price, longitude, latitude,
    };

    console.log(newData);

    fetch(`http://localhost:9292/chef/editprofile/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        phone,
        email,
        longitude,
        latitude,
        chef_price: price,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((updatedInfo) => setPhone(updatedInfo.phone), setEmail(updatedInfo.email), setPrice(updatedInfo.price), setLongitude(updatedInfo.longitude), setLatitude(updatedInfo.latitude));
  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleLongitude = (e) => {
    setLongitude(e.target.value);
  };
  const handleLatitude = (e) => {
    setLatitude(e.target.value);
  };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Edit
      </Button>
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Edit Your Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<<<<<<< HEAD
            <form onSubmit={handleSubmit}>
              <div className="editProfileInputs">
                <label htmlFor="phoneNumber">
                  Phone:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="phone-number"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
              <div className="editProfileInputs">
                <label htmlFor="email">
                  Email:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="editProfileInputs">
                <label htmlFor="price">
                  Price:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="price"
                  placeholder="Price"
                  value={price}
                  onChange={handlePrice}
                />
              </div>
              <div className="editProfileInputs">
                <label htmlFor="longitude">
                  Longitude:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="longitude"
                  placeholder="Longitude"
                  value={longitude}
                  onChange={handleLongitude}
                />
              </div>
              <div className="editProfileInputs">
                <label htmlFor="latitude">
                  Latitude:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="latitude"
                  placeholder="latitude"
                  value={latitude}
                  onChange={handleLatitude}
                />
              </div>
              </form>
            <Button type="submit" onClick={handleSubmit}>Save</Button>
=======
            <div className="editProfileInputs">
              <label htmlFor="phoneNumber">
                Phone:
              </label>
              <input
                type="text"
                className="modal-edit-control"
                id="phone-number"
                placeholder="Phone Number"
                value={phone}
                onChange={handlePhone}
              />
            </div>
            <div className="editProfileInputs">
              <label htmlFor="email">
                Email:
              </label>
              <input
                type="text"
                className="modal-edit-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div className="editProfileInputs">
              <label htmlFor="price">
                Price:
              </label>
              <input
                type="text"
                className="modal-edit-control"
                id="price"
                placeholder="Price"
                value={price}
                onChange={handlePrice}
              />
            </div>
            <div className="editProfileInputs">
              <label htmlFor="longitude">
                Longitude:
              </label>
              <input
                type="text"
                className="modal-edit-control"
                id="longitude"
                placeholder="Longitude"
                value={longitude}
                onChange={handleLongitude}
              />
            </div>
            <div className="editProfileInputs">
              <label htmlFor="latitude">
                Latitude:
              </label>
              <input
                type="text"
                className="modal-edit-control"
                id="latitude"
                placeholder="latitude"
                value={latitude}
                onChange={handleLatitude}
              />
            </div>
            <p />
            <Button type="submit">Save</Button>
>>>>>>> 9953d1f535eb60c24f8093baa6dd7bc02573cd91
          </Modal.Body>
        </Modal>
    </>
  );
}

export default EditChefProfileModal;
