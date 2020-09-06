import React from "react"
import "./Input.css"

const InputForm = (props) => {
    
    let submitForm = (e) => {
        console.log(props)
        props.changeState();
        e.preventDefault();
    }

    return (
        <form className="form" onSubmit={submitForm}>
            <input 
                value={props.name} 
                onChange={props.changeName}
            />
            <button className="submit-form" > submit</button>
        </form >
    )
}

export default InputForm