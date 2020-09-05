import React from 'react';
import ReactDOM from 'react-dom';
import './results.css';
import {Alert} from 'react-bootstrap';

function Results(props) {
    return(
        <div>
            <div className = "header">TITLE OF APP</div>
            <Alert variant='success'>Image was sucessfully uploaded!</Alert>
            <div className= "title"> Your Results: </div>
            <img className = "img" alt="monster" src={props.image}/>
        </div>
    )
}
export default Results