import React from 'react';

function CreateUserAccount() {
  return (
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="fName" className="form-label">
          <p>First Name:</p>
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.fName}
          type="text"
          className="form-control"
          id="fName"
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="lName" className="form-label">
          <p>Last Name:</p>
        </label>
        <input
          required
            //   onChange={handleInput}
            //   value={inputs.lName}
          type="text"
          className="form-control"
          id="lName"
        />
      </div>
      <div className="col-md-12">
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
      <div className="col-md-12">
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
        />
      </div>
      <div className="col-md-12">
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
        />
      </div>
      <div className="col-md-12">
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
        />
      </div>
      <div className="col-md-12">
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
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg btn-block">
        Create Account
      </button>
    </form>
  );
}

export default CreateUserAccount;
