import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Form,Row,Col,Control,Table}  from 'react-bootstrap'
import './ptpage.css';

function Ptpage(){
    class Ptpage extends React.Component {
        constructor(props) {
            super(props)
            this.props.getUsers();
        }
        handleDeleteUser(id) {
            return (e) => this.props.deleteUser(id);
        }   
        render() {
            
            const { user, users } = this.props;
            return (
                <div className="col-md-10 col-md-offset-3">
                    
                    <h2>You're logged in to Gore Health Apps</h2>              
                   <hr/>
                    <h2> {user.firstName} {user.lastName}  &emsp;&emsp;Points:135</h2>
                    {/* fake data for display */}
                    <Form>
      <Form.Row>
      <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Control as="select">
            <option>Need time Roller Here</option>
            <option>06:15 am</option>
            <option>06:30 am</option>
            <option>06:45 am</option>
            <option>07:00 am</option>
            <option>etc...</option>
          </Form.Control>
        </Form.Group>
        {/* <Form.Group as={Col} controlId="formGridTime">
          <Form.Label>Time</Form.Label>
          <Form.Control type="number" placeholder="Need Time roller here" />
        </Form.Group> */}
    
        <Form.Group as={Col} controlId="formGridGbs">
          <Form.Label>GBS</Form.Label>
          <Form.Control placeholder="Enter Your Blood Sugar # Here" />
        </Form.Group>
      </Form.Row>
    
      <Form.Group controlId="formGridA1c">
        <Form.Label>Last HgbA1C</Form.Label>
        <Form.Control placeholder="6.0" />
      </Form.Group>
    
     
      
        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message to Doctor</Form.Label>
            <Form.Control as="textarea" rows="6" />
         </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    
    <h3>Blood Sugar's for last 24HRs</h3>
    
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Time</th>
          <th>Gbs</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>06:00</td>
          <td>75</td>
          <td>oatmeal for b-fast</td>
        </tr>
        <tr>
          <td>10:20</td>
          <td>100</td>
          <td>chicken wrap</td>
        </tr>
        <tr>
          <td>17:30</td>
          <td>201</td>
          <td>milkshake after game</td>
        </tr>
        <tr>
          <td>22:15</td>
          <td>102</td>
          <td>salad</td>
          
        </tr>
      </tbody>
    </Table>
    
    
                    <br></br>
                    <br></br>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            );
        }
    };
}

export default Ptpage