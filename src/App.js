import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import logo from './assets/img/school-in-the-cloud-logo.png'

import Prompt from './components/presentational/Prompt.jsx'
import Nav from './components/containers/Nav'
import SignUpForm from './components/containers/SignUpForm'
import LoginForm from './components/containers/LoginForm'

function App() {
  return (
    <div className="App">
      <Nav logo={logo} />
      <Route 
        exact 
        path="/" 
        render={props => <Prompt message="Home" {...props} />}
      />
      <Route path="/login" component={LoginForm}/>
      <Route path="/signup" component={SignUpForm} />
    </div>
  );
}

export default App;
