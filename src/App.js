import React from 'react';

import './App.css';
import logo from './assets/img/school-in-the-cloud-logo.png'

import Prompt from './components/ui/Prompt.jsx'
import SignUpForm from './components/ui/SignUpForm.jsx'
import Nav from './components/ui/Nav.jsx'

function App() {
  return (
    <div className="App">
      <Nav logo={logo} />
      <Prompt message={"Hi, is this your first time here?"}  />
      <SignUpForm />
    </div>
  );
}

export default App;
