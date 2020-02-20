import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';

class Login extends Component{
    constructor(props){
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
	this.login=this.login.bind(this);
} 
handleChange(e) {
    const { name, value } = e.target;
    const {user}=this.state;
    this.setState({ user:{...user,[name]: value} });
}

handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const {user} = this.state;
    if (user.username) {
        this.login(user);
    }
}
  login(data){
            console.log(data) 
            this.setState ({
                user: {                   
                    username: ''          
                },
                submitted: false
            });     
        }


render() {
  
    const {user, submitted} = this.state;
    return (
        <div id='box' className="col-md-6 col-md-offset-3">          
             <h2>Login Page</h2> 
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={user.username} onChange={this.handleChange} />
                    {submitted && !user.username &&                      
                        <div className='help-block'>Username isrequired</div>   
                    }
                </div>               
                <div className="form-group">
                    <button className="btn btn-primary">Login</button>
                            
                    <Link to="./registerpage" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
                }
            }

export default Login;
