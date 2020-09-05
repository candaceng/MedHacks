import React from 'react';
import ReactDOM from 'react-dom';
import './results.css';
import {Alert} from 'react-bootstrap';

function Results() {
    return(
        <div>
            <div className = "header">TITLE OF APP</div>
            <Alert variant='success'>Image was sucessfully uploaded!</Alert>
            <div className= "title"> Your Results: </div>
            <img className = "img" alt="monster" src={'https://d9qc22597pyja.cloudfront.net/Pictures/2000x2000fit/7/4/1/5741_dermfib3_458338.jpg'}/>
        </div>
    )
}
export default Results