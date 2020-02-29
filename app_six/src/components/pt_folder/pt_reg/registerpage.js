import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import{ Redirect} from 'react-router';
import axios from 'axios';
import './registerpage.css';
// import {renderIntoDocument} from 'react-dom/test-utils';

    class Register extends Component {
        constructor(props) {
            super(props);
    
          this.state = {
                patient: {
                    firstName:'',
                    lastName:'',
                    username:'',              
                    GBS:[],                   
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
            this.register = this.register.bind(this);
        }
    
        handleChange(e) {
            const { name, value } = e.target;
            const { patient } = this.state;

            // https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly state updated 5
            this.setState({
                patient: {
                    ...patient,
                    [name]: value
                }
            });
        }
    
        handleSubmit(e) {
            e.preventDefault();

            console.log(`first name ${this.state.patient.firstName}`);
            console.log(`last name ${this.state.patient.lastName}`);
            console.log(`username ${this.state.patient.username}`);

            const newPatient = {...this.state.patient};

            this.setState({ submitted: true });
            const { patient } = this.state;
            if (patient.firstName && patient.lastName && patient.username) {
                this.register(patient);
            }
            axios.post('http://localhost:5000/Patient', newPatient)
            .then(()=> this.setState({redirect:true}))
            .then(res=> console.log('this is res.data: ',newPatient))
            .catch(err=>{console.error(err)})
        }
//             render (){
//                 const {redirect}=this.state;
// if (redirect){
//     return <Redirect to ="../pt_view/ptpage"/>
// }};
            
        
        
        register(data)    {
            console.log("I  am data from register data ",data); 
            this.setState ({
                patient:{...data},
                submitted: false
            });     
        }

        render() {           
            const { patient, submitted, redirect } = this.state;

if (redirect){
   
return(<Redirect to={{pathname: "../pt_view/ptpage",state:patient}}/>
);
}



            return (
                <div id='box' className="col-md-6 col-md-offset-3">
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !patient.firstName ? ' has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={patient.firstName} onChange={this.handleChange} />
                            {submitted && !patient.firstName &&(
                                <div className="help-block">First Name is required</div>
                             )}
                        </div>
                        <div className={'form-group' + (submitted && !patient.lastName ? ' has-error' : '')}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={patient.lastName} onChange={this.handleChange} />
                            {submitted && !patient.lastName &&(
                                <div className="help-block">Last Name is required</div>       
                                                    
                            
                            )}
                        </div>
                        <div className={'form-group' + (submitted && !patient.username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={patient.username} onChange={this.handleChange} />
                            {submitted && !patient.username &&(
                                <div className="help-block">Username is required</div>
                            )}
                        </div>    
                         
                        <div className="form-group">
                                        
                        <button type="submit">              Submit </button>
                        

                           <button>
                           <Link to="./" className="btn btn-link">Cancel</Link>
                           </button>
                            
                        </div>
                    </form>
                </div>
            );
        }
    }
 

export default Register;

