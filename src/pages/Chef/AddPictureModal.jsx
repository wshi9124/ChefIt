import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const postHeader = {  
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }
}
function AddPictureModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dishName,setdishName] = useState("")
  const [imgLink,setimgLink] = useState("")
  function handleSubmit() {
    fetch("http:/localhost:9292/posts/1",
    {...postHeader,body:JSON.stringify(
      dishName,
      imgLink
    )})
  }
  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Add Picture
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
          <input onChange={(e)=>setdishName(e.target.value)} type="text"/>
          <input onChange={(e)=>setimgLink(e.target.value)} type ="text"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick = {handleSubmit}>Post</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPictureModal;
