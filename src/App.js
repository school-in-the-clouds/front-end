import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import logo from './assets/img/school-in-the-cloud-logo.png'

import Prompt from './components/presentational/Prompt.jsx'
import ProfileCard from './components/presentational/ProfileCard.jsx'
import Nav from './components/presentational/Nav.jsx'
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
      <Route path="/about" component={ProfileCard}/>
      <Route 
        path="/contact" 
        render={props => 
          <Prompt message="reach us at: email@example.com" {...props} />}
      />
    </div>
  );
}

export default App;
