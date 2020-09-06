import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './results.css';
import HomeIcon from '@material-ui/icons/Home';

function LogIn() {
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Link>Forgot Password?</Link>
                
                <Button variant="success" type="submit">
                    Login
                </Button>

                <h6>Don't have an account?</h6><Link>Sign Up</Link>
            </Form>
        </div>
    )
}

export default LogIn