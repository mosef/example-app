import React from 'react';
import logo from '../logo.svg';
import '../scss/App.scss';

// The following code is an example of a functional component in react.

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <p>Here's where a username should go:</p>
        <h3>Ash or Misty</h3>
      </body>
    </div>
  );
};

export default App;
