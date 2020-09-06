import React from 'react';
import ReactDOM from 'react-dom';
import {Alert} from 'react-bootstrap';
import './results.css';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


function Results(props) {
    // const handlePageChange(){
    //     window.location.href="https://stackoverflow.conm/questions/52038274/react-router-redirect-to-homepage"
    // }
    return(
        <div>
            <div className = "header">
                <div id="app-title">TITLE OF APP</div>
                <div id="home-screen">
                    <HomeIcon onClick={event => window.location.href="/"} fontSize="large" style={{ color: 'white'}}>
                    
                    </HomeIcon>
                </div>                
            </div>
            <Alert variant='success'>Image was sucessfully uploaded!</Alert>
            
            <div className= "title"> Your Results: </div>
            

            <img className = "img" alt="image-upload" src={props.image}/>
            <br/>
            <Button variant="success" href='/' style={{marginLeft:'30px'}}>Take another image</Button>
            <Button variant="success" href='/doctor' style={{marginLeft:'10px'}}>Email Doctor</Button>
        
        </div>
    )
}
export default Results