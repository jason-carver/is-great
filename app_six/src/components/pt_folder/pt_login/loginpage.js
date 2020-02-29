import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import{ Redirect} from 'react-router';
import axios from 'axios';
import './loginpage.css';

class Login extends Component{
    constructor(props){
        super(props);    

        this.state = {
                patient: {
                    firstName:'',
                    lastName:'',
                    username:'',              
                    GBS:'',
                    A1C:'',
                    points:'',
                    MDID:'',
                    msgToMd:''
                },
                submitted: false,
                redirect:false
            };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	this.login=this.login.bind(this);
} 
handleChange(e) {
    const { name, value } = e.target;
    const {patient}=this.state;
    this.setState({ patient:{...patient,[name]: value} });
}

handleSubmit(e) {
    e.preventDefault();

    const newPatient= {...this.state.patient};

    this.setState({ submitted: true });
    const {patient} = this.state;
    if (patient.username) {
        this.login(patient);
    }
    axios.post('http://localhost:5000/Patient', newPatient)
    .then(()=> this.setState({redirect:true}))
    .then(res=> console.log('this is res.data: ',newPatient))
    .catch(err=>{console.error(err)})
}
  login(data){
            console.log(data) 
            this.setState ({
                patient: {...data},
                submitted: false
            });     
        }


render() {
  
    const {patient, submitted,redirect} = this.state;
    if (redirect){
   
        return(<Redirect to={{pathname: "../pt_view/ptpage",state:patient}}/>
        );
        }
    return (
        <div id='box' className="col-md-6 col-md-offset-3">          
             <h2>Login Page</h2> 
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !patient.username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={patient.username} onChange={this.handleChange} />
                    {submitted && !patient.username &&                      
                        <div className='help-block'>Username isrequired</div>   
                    }
                </div>               
                <div className="form-group">
                <button type="submit">              Submit </button>
                     <button>
                     <Link to="./registerpage" className="btn btn-link">Register</Link>
                         </button>       
                   
                </div>
            </form>
        </div>
    );
                }
            }

export default Login;
