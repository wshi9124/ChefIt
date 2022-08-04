import { Modal, Button } from 'react-bootstrap';
import StarFill from '../../commonComponents/starfill';

function MoreInfoPopup({
  show, onHide, fullname = '', user_comments = [],
}) {
  const filteredrating = ' ' || user_comments.map((comment) => comment.rating).reduce((sum, ele) => sum + ele);

  const reviewList = user_comments.map((review) => (
    <div className="info-popup-item" key={review.id}>
      <p>{review.comment}</p>
      <StarFill iter={review.rating} />
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
          <h2>
            {fullname}
            {' '}
          </h2>
          <StarFill iter={filteredrating} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {reviewList}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MoreInfoPopup;
