import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const header = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
function RequestModal({ show, onHide, fullName }) {
  const today = new Date().toLocaleString();

  const [calInput, setCal] = useState(today);
  const [request, setRequest] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/request/1').then((resp) => resp.json())
      .then(setRequest);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:9292/request', {
      ...header,
      body: JSON.stringify({
        datetime: calInput,
      }),
    }).then((resp) => resp.json()).then((newreq) => setRequest([...request, newreq]));
  }

  const requestList = request.map((r) => (
    <div className="info-popup-item gap" key={r.id}>
      {new Date(r.request_date).toLocaleString('en-US', { timeZone: 'EST' })}
      <div style={{ color: r.status === 'Declined' ? 'red' : 'green' }}>
        {r.status}
      </div>
    </div>
  ));
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Request
          {' '}
          {fullName}
          {' '}
          Avg-Rating
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="request-list">
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setCal(e.target.value)} value={calInput} type="datetime-local" />
            <input type="submit" />
          </form>
          {requestList}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RequestModal;
