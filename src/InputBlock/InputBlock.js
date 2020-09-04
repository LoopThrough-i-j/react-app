import React,{Component} from 'react';
import styled from '@emotion/styled'

class InputBlock extends Component {

    constructor(props){
        super();
        this.state ={
            input: true,
            name: "Debayan"
        }
    }

    inputToOutput = () => {
        this.setState({
            input: !(this.state.input)
        });
    }
    
    formValueChange = (newName) => {
        this.setState({
            name: newName
        });
    }


    render(){

        const DIV = styled.div`
            height: 20rem;
            width: 20rem;
            border: 1px solid red;
            margin: auto;
            margin-top: 30vh
        `;

        return (
            <DIV>
                <Input >
            </DIV>
        );

    }
}

export default InputBlock;