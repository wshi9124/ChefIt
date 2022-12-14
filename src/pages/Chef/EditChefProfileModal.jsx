import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../Login/AuthProvider';

function EditChefProfileModal() {
  const { auth } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState(auth.phone);
  const [email, setEmail] = useState(auth.email);
  const [price, setPrice] = useState(auth.price);
  const [longitude, setLongitude] = useState(auth.longitude);
  const [latitude, setLatitude] = useState(auth.latitude);
  const [bio, setBio] = useState(auth.bio);
  const [profPic, setProfPic] = useState(auth.prof_pic);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSubmit(e) {
    e.preventDefault();
    id = auth.id;
    fetch(`http://localhost:9292/chef/editprofile/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        phone,
        email,
        longitude,
        latitude,
        chef_price: price,
        bio,
        prof_pic: profPic,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((updatedInfo) => setPhone(updatedInfo.phone), setEmail(updatedInfo.email), setPrice(updatedInfo.price), setLongitude(updatedInfo.longitude), setLatitude(updatedInfo.latitude), setBio(updatedInfo.bio), setProfPic(updatedInfo.prof_pic));
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
  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const handleProfPic = (e) => {
    setProfPic(e.target.value);
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
          <div className="form-group">
            <form onSubmit={handleSubmit}>
              <div className="editProfileInputs">
                <label className="form-label" htmlFor="phoneNumber">
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
                <label className="form-label" htmlFor="email">
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
                <label className="form-label" htmlFor="price">
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
                <label className="form-label" htmlFor="profilepic">
                  Profile Picture Link:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="profilepic"
                  placeholder="Profilepic"
                  value={profPic}
                  onChange={handleProfPic}
                />
              </div>
              <div className="editProfileInputs">
                <label className="form-label" htmlFor="longitude">
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
                <label className="form-label" htmlFor="latitude">
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
              <div className="editProfileInputs">
                <label className="form-label" htmlFor="bio">
                  Bio:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="bio"
                  placeholder="Bio"
                  value={bio}
                  onChange={handleBio}
                />
              </div>
            </form>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="save" type="submit" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditChefProfileModal;
