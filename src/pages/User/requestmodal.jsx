import { Modal, Button } from "react-bootstrap"
function RequestModal({show,onHide,fullName}) {

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
            Request {fullName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default RequestModal