import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Add_article } from '../redux/Action/ArticleAction';
const AddArticle = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
    const[name,setName]=useState("")
    const[image,setImage]=useState("")
    const[subject,setSubject]=useState("")
    const handleAdd=()=>{
        dispatch(Add_article({name,image,subject}),handleClose())
    }
  return (
    <div>
    <Button variant="primary" style={{borderRadius:"50%"}} onClick={handleShow}>
        +
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject" onChange={(e)=>setSubject(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddArticle