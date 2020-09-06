import React from 'react';
import './Display.css'

const Display = (props) => {

    let message = "";
    console.log(props.name);
    console.log(props.orgName);
    props.name.localeCompare(props.orgName)?
        message = "Shoo Shoo. You are not Welcome. Only Debayan is Welcome"
        :
        message = "Welcome.";
    

    return (
        <div 
            className="output"
            onClick = {props.changeState}
        >   
        <div className="value">
            {props.name}
        </div>
        <div className="message">
            {message}
        </div>
        </div>
    )
}

export default Display;