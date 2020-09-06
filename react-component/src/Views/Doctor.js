import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './results.css';
import HomeIcon from '@material-ui/icons/Home';

function ContactDoctor() {
    return(
        <div>
            <div className = "header">
                <div id="app-title">TITLE OF APP</div>
                <div id="home-screen">
                    <HomeIcon onClick={event => window.location.href="/"} fontSize="large" style={{ color: 'white'}}>
                    
                    </HomeIcon>
                </div>                
            </div>
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