import React from 'react';

function CreateUserAccount() {
  return (
    <div className="signupContainer">
        <div className="col-md-6 off-md-3">
    <form action="" className="mt-5 border p-4 bg-light shadow">
      <h4 class="mb-5 text">Create Customer Account</h4>
      <div className="mb-3">
        <label className="form-label"> First Name:</label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.fName}
          type="text"
          className="form-control"
          id="fName"
          placeholder='First Name'
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Last Name:</label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.lName}
          type="text"
          className="form-control"
          id="lName"
          placeholder='Last Name'
        />
      </div>
      <div className="mb-3">
        <label className="form-label"> Email:</label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.fName}
          type="text"
          className="form-control"
          id="email"
          placeholder='Email'
        />
      </div>
      <div className="mb-3">
        <label htmlFor="birthday" className="form-label">
          Birthday:
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.birthday}
          type="date"
          className="form-control"
          id="birthday"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.username}
          type="text"
          className="form-control"
          id="username"
          placeholder='Username'
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.password}
          type="password"
          className="form-control"
          id="password"
          placeholder='Password'
        />
      </div>
      <div className="mb-3">
        <label htmlFor="picture" className="form-label">
          Profile Picture:
          {' '}
        </label>
        <input
            //   onChange={handleInput}
            //   value={inputs.picture}
          type="text"
          className="form-control"
          id="picture"
          placeholder='Url link'
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bioform" className="form-label">
          Description:
          {' '}
        </label>
        <textarea
            //   onChange={handleInput}
            //   value={inputs.bioform}
          type="text"
          className="form-control"
          id="bioform"
          placeholder='Write bio here...'
        />
      </div>
      <div className="mb-3">
        <label htmlFor="longitutde" className="form-label">
          Longitude:
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.username}
          type="text"
          className="form-control"
          id="longitude"
          placeholder='Longitude'
        />
      </div>
      <div className="mb-3">
        <label htmlFor="latitude" className="form-label">
          Latitude:
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.username}
          type="text"
          className="form-control"
          id="latitude"
          placeholder='Latitude'
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg btn-block">
        Create Account
      </button>
    </form>
    </div>
    </div>

  );
}

export default CreateUserAccount;
