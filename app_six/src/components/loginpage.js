import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './loginpage.css';

class Login extends Component{
    constructor(props){
        super(props);

        // reset login status
        // this.props.logout();

        this.state={
            user:{
            username:"",
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
    const {username} = this.state;
    if (username) {
        this.props.login(username);
    }
}
render() {
  
    const {username, submitted} = this.state;
    return (
        <div className="col-md-6 col-md-offset-3">
            <h2>Gore Health Apps</h2>
            <h2> Patient Login Page</h2>
            <form name="form" onSubmit={this.handleSubmit}>
                <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                    {submitted && !username &&
                        <div className="help-block">Username is required</div>
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


