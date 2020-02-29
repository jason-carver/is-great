import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './registerpage.css';

    class Register extends Component {
        constructor(props) {
            super(props);
    
          this.state = {
                user: {
                    firstName:'',
                    lastName:'',
                    username:'',                  
                    GBS:'',
                    A1C:'',
                    points:'',
                    MDID:'',
                    msgToMd:''
                },
                submitted: false
            };
    
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.register = this.register.bind(this);
        }
    
        handleChange(e) {
            const { name, value } = e.target;
            const { user } = this.state;
            this.setState({
                user: {
                    ...user,
                    [name]: value
                }
            });
        }
    
        handleSubmit(e) {
            e.preventDefault();
    
            this.setState({ submitted: true });
            const { user } = this.state;
            if (user.firstName && user.lastName && user.username) {
                this.register(user);
            }
        }
        register(data)    {
            console.log(data) 
            this.setState ({
                user: {
                    firstName: '',
                    lastName: '',
                    username: ''                   
                },
                submitted: false
            });     
        }

        render() {           
            const { user, submitted } = this.state;
            return (
                <div id='box' className="col-md-6 col-md-offset-3">
                    <h2>Register</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.handleChange} />
                            {submitted && !user.firstName &&
                                <div className="help-block">First Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            {submitted && !user.lastName &&
                                <div className="help-block">Last Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                            {submitted && !user.username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div>                       
                        <div className="form-group">
                            <button className="btn btn-primary">Register</button>
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

