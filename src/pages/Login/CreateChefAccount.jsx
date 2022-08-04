import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthProvider';

function CreateChefAccount() {
  const navigate = useNavigate();
  const { setAuth, setIsCustomerLogOn, setIsChefLog } = useContext(AuthContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [bio, setBio] = useState('');
  const [phone, setPhone] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setlatitude] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:9292/chef/createaccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        phone,
        prof_pic: profilePic,
        bio,
        email,
        longitude,
        latitude,
      }),
    });
    navigate('/login');
    setAuth({});
    setIsCustomerLogOn(false);
    setIsChefLog(false);
    alert('Chef account has been created');
  };

  const handleBack = () => {
    navigate('/login');
    setAuth({});
    setIsCustomerLogOn(false);
    setIsChefLog(false);
  };

  return (
    <div className="col-md-6 off-md-3">
      <form action="" className="mt-5 border p-4 bg-light shadow" onSubmit={handleSubmit}>
        <h4 className="mb-5 text">Create Chef Account</h4>
        <div className="mb-3">
          <label className="form-label"> First Name:</label>
          <input
            type="text"
            className="form-control"
            id="fName"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lName"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Email:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="picture" className="form-label">
            Profile Picture:
            {' '}
          </label>
          <input
            type="text"
            className="form-control"
            id="picture"
            placeholder="Url link"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bioform" className="form-label">
            Description:
            {' '}
          </label>
          <textarea
            type="text"
            className="form-control"
            id="bioform"
            placeholder="Write bio here..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Phone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">
            Longitude:
          </label>
          <input
            type="text"
            className="form-control"
            id="longitude"
            placeholder="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">
            Latitude:
          </label>
          <input
            type="text"
            className="form-control"
            id="latitude"
            placeholder="Latitude"
            value={latitude}
            onChange={(e) => setlatitude(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Create Account
        </button>
        <button type="button" className="btn btn-secondary btn-lg btn-block" style={{ marginLeft: '10px' }} onClick={handleBack}>
          Back
        </button>
      </form>
    </div>
  );
}

export default CreateChefAccount;
