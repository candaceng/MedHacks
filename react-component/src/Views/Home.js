import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'

function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        
        <Container className="m-5">
            <Button variant="primary" href="/login">Log In</Button>{' '}
            <Button variant="primary" href="/signup">SignUp</Button>{' '}
            <h1 style={{textAlign: "center", paddingTop: "20%"}}>AppName</h1>
            <Button variant="primary" onClick={handleShow}>Upload a picture</Button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Upload your picture</Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <Form>
                    <Form.Group>
                    <Form.File />
                    </Form.Group>
                    </Form>
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
             </Modal.Footer>
            </Modal>
        </Container>
    )
}
export default Home