import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import  Home from './components/homepage';
import Login  from './components/loginpage';
import Register  from './components/registerpage';
import Mdpage from './components/mdpage';
import Ptpage from './components/ptpage';
import Shopping from './components/shoppingpage';

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
                        <Route path="/mdpage" component={Mdpage} />
                        <Route path="/ptpage" component={Ptpage} />
                        <Route path="/shoppingpage" component={Shopping} />
                        {/* <Redirect from="*" to="/" /> */}
                  
                </Router>
            </div>
        </div>
    </div>
 );
}

export default App;
