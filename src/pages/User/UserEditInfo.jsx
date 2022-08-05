import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../Login/AuthProvider';

function UserEditInfo() {
  const {auth} = useContext(AuthContext)
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState(auth.phone);
  const [email, setEmail] = useState(auth.email);
  const [longitude, setLongitude] = useState(auth.longitude);
  const [latitude, setLatitude] = useState(auth.latitude);
  const [profPic, setProfPic] = useState(auth.prof_pic);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();

    fetch('http://localhost:9292/user/editprofile/'+id, {
      method: 'PATCH',
      body: JSON.stringify({
        phone,
        email,
        longitude,
        latitude,
    prof_pic: profPic
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
  .then((updatedInfo) => setPhone(updatedInfo.phone), setEmail(updatedInfo.email), setLongitude(updatedInfo.longitude), setLatitude(updatedInfo.latitude), setProfPic(updatedInfo.prof_pic)
    );

  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleLongitude = (e) => {
    setLongitude(e.target.value);
  };
  const handleLatitude = (e) => {
    setLatitude(e.target.value);
  };
  const handleProfPic = (e) => {
    setProfPic(e.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="info-Change-Form">
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
              <div className="editProfileInputs">
              <label classname='form-label' htmlFor="phoneNumber">
                  Phone:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={handlePhone}
                />
              </div>
              <div className="editProfileInputs">
              <label classname='form-label' htmlFor="email">
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
              <label classname='form-label' htmlFor="profilePic">
                  Profile Picture:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="profilePic"
                  placeholder="Email"
                  value={profPic}
                  onChange={handleProfPic}
                />
              </div>
              <div className="editProfileInputs">
              <label classname='form-label' htmlFor="longitude">
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
              <label classname='form-label' htmlFor="latitude">
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
            </div>

          </Modal.Body>
          <Modal.Footer>
          <Button type='submit' onClick={handleSubmit}>Save</Button>
          </Modal.Footer>
        </Modal>
      </form>
    </div>
  );
}

export default UserEditInfo