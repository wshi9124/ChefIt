import { Modal,Button } from 'react-bootstrap';
import {BsStar,BsStarFill} from 'react-icons/bs'

function MoreInfoPopup ({show,onHide,fullname="",user_comments}) {

    const avgrating = user_comments.map(review=>{
        for (let i = 0;i < review;i++) {
            
        }
    })
    const reviewList = user_comments.map(review=><div className='info-popup-item' key={review.id}>
    <p>{review.comment}</p>
    <p className='star-review'>{[...Array(review.rating)].map((e,i) =>
        <BsStarFill key={i}/> 
            )
            }
            {
            [...Array(5-review.rating)].map((e,i)=> <BsStar key={i}/>)
            }
        </p></div>
    )
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
            {fullname} Reviews
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


export default MoreInfoPopup