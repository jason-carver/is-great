import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './mdloginpage.css';

    class Mdlogin extends Component {

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
            this.mdlogin = this.mdlogin.bind(this);
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
            if ( md.username ) {
                this.mdlogin(md);
              
            }
        }
        mdlogin(data)    {
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
                    <h2>Provider Log In</h2>
                    <form name="form" onSubmit={this.handleSubmit}>
                        
                        <div className={'form-group' + (submitted && !md.username ? ' has-error' : '')}>
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" value={md.username} onChange={this.handleChange} />
                            {submitted && !md.username &&
                                <div className="help-block">Username is required</div>
                            }
                        </div> 
                              
                        <div className="form-group">
                            <button className="btn btn-primary"><Link to="./mdpage" className="btn btn-link">Submit</Link></button>
                           <button>
                           <Link to="./" className="btn btn-link">Cancel</Link>
                           </button>
                            
                        </div>
                    </form>
                </div>
            );
        }
    }


export default Mdlogin;
