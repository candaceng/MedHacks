import React from 'react';
import ReactDOM from 'react-dom';
import './results.css';
import {Alert} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

function Results() {
    // const handlePageChange(){
    //     window.location.href="https://stackoverflow.com/questions/52038274/react-router-redirect-to-homepage"
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
            <img className = "img" alt="monster" src={'https://d9qc22597pyja.cloudfront.net/Pictures/2000x2000fit/7/4/1/5741_dermfib3_458338.jpg'}/>
            <br/>
           <button className="btn btn-success">
                Take another image    
            </button>
            <button className="btn btn-success"> Email Doctor </button>
        </div>
    )
}
export default Results