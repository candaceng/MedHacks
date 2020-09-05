import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ContactDoctor() {
    return(
        <div>
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter your doctor's email:</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Send
                </Button>
            </Form>
        </div>
    )
}

export default ContactDoctor