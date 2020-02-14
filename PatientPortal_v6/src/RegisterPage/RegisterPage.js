import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                mdId: '',              
                username: ''                    
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        const {user} = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        event.preventDefault();

        this.setState({submitted:true});
        const {user} = this.state;
        if (user.name && user.mdId && user.username) {
            this.props.register(user);
        }
    }

    render() {
        const {registering} = this.props;
        const {user, submitted} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" name="name" value={user.name} onChange={this.handleChange} />
                        {submitted && !user.name &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.mdId ? ' has-error' : '')}>
                        <label htmlFor="mdId">Doctors ID Number:</label>
                        <input type="text" className="form-control" name="mdId" value={user.mdId} onChange={this.handleChange} />
                        {submitted && !user.mdId &&
                            <div className="help-block">Doctors Id number is required</div>
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
                                      
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegisterPage;