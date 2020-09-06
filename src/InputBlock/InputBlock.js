import React,{Component} from 'react';
import InputForm from './Input/Input.js';
import Display from './Display/Display.js';
import './InputBlock.css';

class InputBlock extends Component {

    constructor(){
        super();
        
        this.state ={
            input: true,
            name: "Debayan",
            orgName: "Debayan"
        }
        
    }

    changeName = (e) =>{
        this.setState({
            name: e.target.value
        })
    }
    changeInputState = () =>{
        
        this.setState({
            input: !this.state.input
        })
    }
    

    render(){
        let inputfield = (
            <InputForm 
                name = {this.state.name} 
                changeName = {this.changeName}
                changeState = {this.changeInputState}
            />
        );
        let display = (
            <Display 
                name = {this.state.name} 
                orgName = {this.state.orgName} 
                changeState = {this.changeInputState} 
            />
        );
        return (
            <div className="input-block">
                {this.state.input?
                    display: 
                    inputfield
                }
            </div>
        );

    }
}

export default InputBlock;