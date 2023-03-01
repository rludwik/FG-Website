import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Solutions from './Solutions';
import About from './About';
import ContactUs from './Contactus';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React        </a>
      </header>
      <Home />
      <Solutions />
      <About />
      <ContactUs />
      

    </div>
  );
}

export default App;
