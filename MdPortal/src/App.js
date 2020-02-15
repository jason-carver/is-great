import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MdPage} from './MdPage';
import { render } from '@testing-library/react';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import {Button, Form,Row,Col,Control,Table}  from 'react-bootstrap';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

function App() { 
    return (
      <div className="jumbotron">
          <div className="container">
              <div className="col-sm-8 col-sm-offset-2">                  
                  <Router history={history}>
                      <Switch>
                        {/* HomePage is route to landingPage */}
                          <PrivateRoute exact path="/" component={HomePage} />
                          <Route path="./login" component={LoginPage} />
                          <Route path="./register" component={RegisterPage} />
                          <Route path="./MdPage" component={MdPage} />
                          <Redirect from="*" to="/" />
                      </Switch>
                  </Router>
              </div>
          </div>
      </div>
   );
  }

export default App;
