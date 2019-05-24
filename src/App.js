import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import logo from './assets/img/school-in-the-cloud-logo.png'

import Prompt from './components/views/jsx/Prompt.jsx.js.js.js'
import Nav from './components/views/containers/Nav'
import SignUpForm from './components/views/containers/SignUpForm'
import LoginForm from './components/views/containers/LoginForm'

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
