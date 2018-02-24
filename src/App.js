import React, { Component } from 'react';
import Job from './components/Job';
import logo from './logo.svg';
import './css/style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      init: true,
    }
  }
  render() {
    const TestStyle = {
      color: '#61DAFB',
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title" style={TestStyle}>Timeshit Roulette</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Job/>
      </div>
    );
  }
}

export default App;
