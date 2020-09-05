import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <div>
            This is the Home Page
            <Button><Link to="/login" >LogIn</Link></Button>
        </div>
    )
}
export default Home