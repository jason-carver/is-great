import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './mdregistrationpage.css';

    class Mdregister extends Component {

        constructor(props) {
            super(props);
    
          this.state = {
                md: {
                    firstName:'',
                    lastName:'',
                    username:'',                                 
                    MDID:'',
                    msgToPt:''
                },
                submitted: false
            };
    
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.mdregister = this.mdregister.bind(this);
        }
    
        handleChange(e) {
            const { name, value } = e.target;
            const { md } = this.state;
            this.setState({
                md: {
                    ...md,
                    [name]: value
                }
            });
        }
    
        handleSubmit(e) {
            e.preventDefault();
    
            this.setState({ submitted: true });
            const { md } = this.state;
            if (md.firstName && md.lastName && md.username &&md.MDID) {
                this.mdregister(md);
              
            }
        }
        mdregister(data)    {
            console.log(data) 
            this.setState ({
                md: {
                    firstName:'',
                    lastName:'',
                    username:'',                                 
                    MDID:'',
                    msgToPt:''
                },
                submitted: false
            });     
        }

        render() {           
            const { md, submitted } = this.state;
            return (
                <div id='box' className="col-md-6 col-md-offset-3">
                    <h2>Provider Registration</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className={'form-group' + (submitted && !md.firstName ? ' has-error' : '')}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" name="firstName" value={md.firstName} onChange={this.handleChange} />
                            {submitted && !md.firstName &&
                                <div className="help-block">First Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !md.lastName ? ' has-error' : '')}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" name="lastName" value={md.lastName} onChange={this.handleChange} />
                            {submitted && !md.lastName &&
                                <div className="help-block">Last Name is required</div>
                            }
                        </div>
                        <div className={'form-group' + (submitted && !md.username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={md.username} onChange={this.handleChange} />
                            {submitted && !md.username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div> 
                        <div className={'form-group' + (submitted && !md.MDID ? ' has-error' : '')}>
                            <label htmlFor="MDID">Id code provided be rep</label>
                            <input type="text" className="form-control" name="MDID" value={md.MDID} onChange={this.handleChange} />
                            {submitted && !md.MDID &&
                                <div className="help-block">Id from rep is required</div>
                            }
                        </div>                     
                        <div className="form-group">
                            <button className="btn btn-primary"><Link to="./mdloginpage" className="btn btn-link">Submit</Link></button>
                           <button>
                           <Link to="./" className="btn btn-link">Cancel</Link>
                           </button>
                            
                        </div>
                    </form>
                </div>
            );
        }
    }


export default Mdregister;
