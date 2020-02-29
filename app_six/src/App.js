import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import  Home from './components/landingpage/homepage';
import Login  from './components/pt_folder/pt_login/loginpage';
import Register  from './components/pt_folder/pt_reg/registerpage';
import Ptpage from './components/pt_folder/pt_view/ptpage';
import Mdlogin  from './components/md_folder/md_login/mdloginpage';
import Mdregister  from './components/md_folder/md_reg/mdregistrationpage';
import Mdpage from './components/md_folder/md_view/mdpage';

function App() { 
  return (
    <div className="jumbotron">
        <div className="container">
            <div className="col-sm-8 col-sm-offset-2">                  
                <Router>                   
                      {/* HomePage is route to landingPage */}
                        <Route exact path="/" component={Home} />
                        <Route path="/loginpage" component={Login} />
                        <Route path="/registerpage" component={Register} />
                        <Route path="/pt_view/ptpage" component={Ptpage} />
                                                     
                        <Route path="/mdloginpage" component={Mdlogin} />
                        <Route path="/mdregistrationpage" component={Mdregister} />
                        <Route path="/mdpage" component={Mdpage} /> 
                                       
                </Router>
            </div>
        </div>
    </div>
 );
}

export default App;
