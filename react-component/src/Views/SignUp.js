import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function SignUp() {
    return(
        <div>
            <h1>Sign Up</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Retype Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>

                <h6>Already have an account?</h6><Link>Login</Link>
            </Form>
        </div>
    )
}
export default SignUp