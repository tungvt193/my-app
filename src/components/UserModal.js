import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createUser } from '../services/UserService';

function UserModal(props) {
  const { show, handleClose } = props
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const handleSubmit = async () => {
    let res = await createUser({
      name,
      job
    })
    handleClose()
  }

  return (
    <>    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Job</Form.Label>
              <Form.Control
                type="text"
                placeholder="Job"
                onChange={(e) => {
                  setJob(e.target.value)
                }}
                value={job}
              />
            </Form.Group>            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserModal;