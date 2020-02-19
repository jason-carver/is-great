import React from 'react';
import { Link } from 'react-router-dom';
import './mdpage.css';


    class Mdpage extends React.Component {
        componentDidMount() {
            this.props.getUsers();
        }
    
        handleDeleteUser(id) {
            return (e) => this.props.deleteUser(id);
        }
    
        render() {
            const { user, users } = this.props;
            return (
                <div className="col-md-10 col-md-offset-3">
                    {/* <h1>Hi {user.firstName}!</h1> */}
                    <h2>You're logged in to Gore Health Apps</h2>                   
             
                   <hr/>
                    {/* <h2> {firstName} {lastName} MD &emsp;&emsp;ID:123ABC</h2> */}
                    {/* fake data for display */}
                    <table class="table table-bordered">
                        <thead>
                        <tr class="table-primary">
                        <th scope="col"class="bg-info"></th>
                            <th scope="col"class="bg-info ">Patient's Name</th>
                            <th scope="col"class="bg-info">Avg GBS</th>
                            <th scope="col"class="bg-info">Monthly A1C</th>
                            <th scope="col"class="bg-info">Time/GBS</th>
                            <th scope="col"class="bg-info">Messages</th>
                            <th scope="col"class="bg-info">Points Awarded</th>
                            <th scope="col"class="bg-info">Add Message to Pt</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="table-primary">
                            <th scope="row"class="bg-info">1</th>
                             <td class="bg-info">Ed Jenning</td>
                             <td class="bg-info">278</td>
                             <td class="bg-info">7.2</td>
                             <td class="bg-info">06:10 / 400 11:00 / 360 17:24 / 200 23:50 / 150</td>
                             <td class="bg-info">-</td>      <td class="bg-info">No</td>
                             <td class="bg-info">Please call office to discuss your results</td>
                        </tr>
                       
                        <tr class="table-primary">
                            <th scope="row"class="bg-info">2</th>
                             <td class="bg-info">Mary Curie</td>
                             <td class="bg-info">54</td>
                             <td class="bg-info">6.4</td>
                             <td class="bg-info" >05:23 / 47 13:45 / 68 20:00 / 52 21:05 / 50</td>
                             <td class="bg-info">-</td>
                             <td class="bg-info">No</td>
                             <td class="bg-info"></td>
                        </tr>
                        <tr class="table-primary">
                        <th scope="row"class="bg-info">3</th> 
                             <td class="bg-info">Lou Pasture</td>
                             <td class="bg-info">114</td>
                             <td class="bg-info">6.0</td>
                             <td class="bg-info">09:45 / 210 14:02 / 102 21:34 / 64 01:10 / 80</td>
                             <td class="bg-info">-</td>
                             <td class="bg-info">Yes</td>
                             <td class="bg-info">Getting Better!!!</td>
                        </tr>
                        <tr class="table-primary">
                        <th scope="row" class="bg-info">4</th>
                             <td class="bg-info">John Sulk</td>
                             <td class="bg-info" >131</td>
                             <td class="bg-info" >6.6</td>
                             <td class="bg-info">06:10 / 198 11:00 / 211 17:24 / 86 23:50 / 30</td>
                             <td class="bg-info">'11a.m.-Party at work
                                 skiped dinner hadglucose gel and snack </td>
                             <td class="bg-info">Yes</td>          <td class="bg-info">be mindful of the traps!</td>         
                        </tr>
                        <tr class="table-primary">
                        <th scope="row"class="bg-info">5</th>
                             <td class="bg-info">Hop O'Crees</td>
                             <td class="bg-info">134</td>
                             <td class="bg-info">5.8</td>
                             <td class="bg-info">08:10 / 53 11:05 / 100 18:10 / 298 24:00 / 86</td>
                             <td class="bg-info">-</td>
                             <td class="bg-info">Yes</td>
                             <td class="bg-info">What happened @18:10?</td>
                        </tr>  
                        </tbody>              
                    </table>
                    <br></br>
                    <br></br>
                    <p>
                        <Link to="/login">Logout</Link>
                    </p>
                </div>
            );
        }
    }
    
 


export default Mdpage;

