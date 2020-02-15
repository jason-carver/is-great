  
import React, {Component} from 'react';
import {Button, Form,Row,Col,Control,Table}  from 'react-bootstrap';
import './MdPage.css';


class MdPage extends Component{
    constructor(){
        super(props)
        this.props.getUsers();

        this.state={
            Md:{           
            msgFromMd: "",
            submitted: false
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { msgFromMd } = this.state;
    if (msgFromMd) {
        this.props.login(msgFromMd);
    }
}


render(){
    const{user,users}=this.props;
    var filteredArray = user.filter( obj => obj.value === {MDID} ).map( obj => obj.name,obj.GBS,obj.points,obj.msgToMd );
    
    return(
       <div>
            <div className="col-md-10 col-md-offset-3">
            <h1>Welcome {Md.name}!</h1>
            <h2>Your provider Id is {Md.MDID}</h2>   
            </div>
        
           return(filteredArray)
                
                <Form.Row>
                    <Form.Group controlId="MsgToPt">
                        <Form.Label>Message to Patient</Form.Label>
                        <Form.Control as="textarea" rows="6" />
                </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">Submit</Button>
            </div>

    )
// {/* {Need to display last 24 hr GBS } */}

     
}
}

export default MdPage;





