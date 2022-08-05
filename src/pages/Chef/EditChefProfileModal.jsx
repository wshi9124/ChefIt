import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AuthContext from '../Login/AuthProvider';

function EditChefProfileModal() {
  const [show, setShow] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [bio, setBio] = useState('')
  const [profPic, setProfPic] = useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {auth} = useContext(AuthContext)

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/chef/editprofile/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        phone,
        email,
        longitude,
        latitude,
        chef_price: price,
        bio,
        prof_pic: profPic
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((updatedInfo) => setPhone(updatedInfo.phone), setEmail(updatedInfo.email), setPrice(updatedInfo.price), setLongitude(updatedInfo.longitude), setLatitude(updatedInfo.latitude), setBio(updatedInfo.bio), setProfPic(updatedInfo.profPic))
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
                  id="phone-number"
                  placeholder="Phone Number"
                  value={auth.phone}
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
                  value={auth.email}
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
                  value={auth.price}
                  onChange={handlePrice}
                />
              </div>
              <div className="editProfileInputs">
                <label classname='form-label' htmlFor="profile-pic">
                  Profile Picture Link:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="profilepic"
                  placeholder="Profilepic"
                  value={auth.prof_pic}
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
                  value={auth.longitude}
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
                  value={auth.latitude}
                  onChange={handleLatitude}
                />
              </div>
              <div className="editProfileInputs">
                <label className="form-label" htmlFor="Bio">
                  Bio:
                </label>
                <input
                  type="text"
                  className="modal-edit-control"
                  id="bio"
                  placeholder="Bio"
                  value={auth.bio}
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
