import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Md: {
                name: '',                            
                username: ''                    
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        const {Md} = this.state;
        this.setState({
            Md: {
                ...Md,
                [name]: value
            }
        });
    }

    handleSubmit(e) {
        event.preventDefault();

        this.setState({submitted:true});
        const {Md} = this.state;
        if (Md.name && Md.username) {
            this.props.register(Md);
        }
    }

    render() {
        const {registering} = this.props;
        const {Md, submitted} = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !Md.name ? ' has-error' : '')}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" name="name" value={Md.name} onChange={this.handleChange} />
                        {submitted && !Md.name &&
                            <div className="help-block">Name is required</div>
                        }
                    </div>
                                                              
                    <div className={'form-group' + (submitted && !Md.username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={Md.username} onChange={this.handleChange} />
                        {submitted && !Md.username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>                                                        
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>

        {/* need to return an id to Md to give to pts */}
        
                    <h2>Here is your Id to give to patients so you are securly connected { MDID }</h2>
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default RegisterPage;