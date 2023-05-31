import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Delete_article, Edit_article } from '../redux/Action/ArticleAction';
const ArticlesCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[name,setName]=useState(el?.name)
  const[image,setImage]=useState(el?.image)
  const[subject,setSubject]=useState(el?.subject)
  const handleEdit=()=>{
    dispatch(Edit_article(el._id,{name,image,subject}),handleClose(),window.location.reload())
  }
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el?.image} alt='404' />
      <Card.Body>
        <Card.Title>{el?.name}</Card.Title>
        <Card.Text>
         {el?.subject}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
      <Button variant="danger" onClick={()=>dispatch(Delete_article(el._id),window.location.reload())}>Delete</Button>
      <Button variant="warning"  onClick={handleShow}>
       Edit
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setImage(e.target.value)} 
        value={image} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} 
          value={name}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject" onChange={(e)=>setSubject(e.target.value)} 
          value={subject}
        />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default ArticlesCard