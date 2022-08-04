import { Modal, Button } from 'react-bootstrap';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

function MoreInfoPopup({
  show, onHide, fullname = '', user_comments,
}) {
  const filteredrating = user_comments.map((comment) => comment.rating).reduce((sum, ele) => sum + ele);
  const reviewList = user_comments.map((review) => (
    <div className="info-popup-item" key={review.id}>
      <p>{review.comment}</p>
      {starfill(review.rating)}
    </div>
  ));
  function starfill(iter) {
    return (
      <p className="star-review">
        {[...Array(iter)].map((e, i) => <BsStarFill key={i} />)}
        {!Number.isInteger(filteredrating) && filteredrating >= 0.5 ? <BsStarHalf /> && iter + 1 : null}
        {
              [...Array(5 - iter)].map((e, i) => <BsStar key={i} />)
              }
      </p>
    );
  }
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
            {starfill(filteredrating)}
          </h2>
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
