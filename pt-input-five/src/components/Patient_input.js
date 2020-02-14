  
import React, {Component} from 'react';
import {Button, Form,Row,Col,Control,Table}  from 'react-bootstrap';
import './Patient_inputs.css';


class Patient_Inputs extends Component{
    constructor(){
        super()
        this.state={
            ptName:"",
            mdId:"",
            GBS: [],
            points: "",
            msgToMd: ""
        }
    }
}

changePtName(){
    this.setState({
        ptName:"able"
    })
}
render(){
    return(
    <h1>Welcome {this.state.ptName}!</h1>
    <button onClick={()=>this.changePtName()}> </button>
    )
};

export default Patient_Inputs