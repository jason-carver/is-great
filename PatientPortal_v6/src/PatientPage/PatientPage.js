  
import React, {Component} from 'react';
import {Button, Form,Row,Col,Control,Table}  from 'react-bootstrap';
import './PatientPage.css';


class PatientPage extends Component{
    constructor(){
        super(props)
        this.props.getUsers();

        this.state={
            user:{
            name:"",
            MDID:"",
            GBS: [],
            points: "",
            msgToMd: "",
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
    const { name, mdId, GBS, points,msgToMd } = this.state;
    if (name && mdId && GBS && points && msgToMd) {
        this.props.login(name, mdId, GBS, points,msgToMd);
    }
}






render(){
    const{user,users}=this.props;
    const name= this.state.user.name
    var filteredArray = user.filter( obj => obj.value === {name} ).map( obj => obj.GBS );
    return(
       <div>
        <div className="col-md-10 col-md-offset-3">
          <h1>Welcome {user.name}!</h1>
          <h2>You've earned {user.points} points</h2>    
        </div>
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId='formGridTime'>
                    <Form.Control as='select'>
                        <option>00:00</option> 
                        <option>00:15</option>
                        <option>00:30</option>
                        <option>00:45</option>
                        <option>01:00</option>
                        <option>01:15</option>
                        <option>01:30</option>
                        <option>01:45</option>
                        <option>02:00</option>
                        <option>02:15</option>
                        <option>02:30</option>
                        <option>02:45</option>
                        <option>03:00</option>
                        <option>03:15</option>
                        <option>03:30</option>
                        <option>03:45</option>
                        <option>04:00</option>
                        <option>04:15</option>
                        <option>04:30</option>
                        <option>04:45</option>      
                        <option>05:00</option>
                        <option>05:15</option>
                        <option>05:30</option>
                        <option>05:45</option>
                        <option>06:00</option>
                        <option>06:15</option>
                        <option>06:30</option>
                        <option>06:45</option>
                        <option>07:00</option>
                        <option>07:15</option>
                        <option>07:30</option>
                        <option>07:45</option>
                        <option>08:00</option>
                        <option>08:15</option>
                        <option>08:30</option>
                        <option>08:45</option>
                        <option>09:00</option>
                        <option>09:15</option>
                        <option>09:30</option>
                        <option>09:45</option>
                        <option>10:00</option>
                        <option>10:15</option>
                        <option>10:30</option>
                        <option>10:45</option>
                        <option>11:00</option>
                        <option>11:15</option>
                        <option>11:30</option>
                        <option>11:45</option>
                        <option>12:00</option>                       
                        <option>12:15</option>
                        <option>12:30</option>
                        <option>12:45</option>
                        <option>13:00</option>
                        <option>13:15</option>
                        <option>13:30</option>
                        <option>13:45</option>
                        <option>14:00</option>
                        <option>14:15</option>
                        <option>14:30</option>
                        <option>14:45</option>
                        <option>15:00</option>
                        <option>15:15</option>
                        <option>15:30</option>
                        <option>15:45</option>
                        <option>16:00</option>
                        <option>16:15</option>
                        <option>16:30</option>
                        <option>16:45</option>      
                        <option>17:00</option>
                        <option>17:15</option>
                        <option>17:30</option>
                        <option>17:45</option>
                        <option>18:00</option>
                        <option>18:15</option>
                        <option>18:30</option>
                        <option>18:45</option>
                        <option>19:00</option>
                        <option>19:15</option>
                        <option>19:30</option>
                        <option>19:45</option>
                        <option>20:00</option>
                        <option>20:15</option>
                        <option>20:30</option>
                        <option>20:45</option>
                        <option>21:00</option>
                        <option>21:15</option>
                        <option>21:30</option>
                        <option>21:45</option>
                        <option>22:00</option>
                        <option>22:15</option>
                        <option>22:30</option>
                        <option>22:45</option>
                        <option>23:00</option>
                        <option>23:15</option>
                        <option>23:30</option>
                        <option>23:45</option>             
                    </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridGbs">
                    <Form.Label>GBS</Form.Label>
                    <Form.Control placeholder="Enter GBS Here" />
                 </Form.Group> 
            </Form.Row>
            <Form.Row>
                 <Form.Group controlId="exampleForm.ControlTextarea1">
                     <Form.Label>Message to Doctor</Form.Label>
                     <Form.Control as="textarea" rows="6" />
             </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">Submit</Button>


{/* {Need to display last 24 hr GBS and messages from MD } */}
                return(filteredArray)   
        </Form>
        </div>
    );
}
}

export default PatientPage;





