import React, { Component } from 'react';
import Home from './Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Markdown Preview</h3>
        <Home />
      </div>
    );
  }
}

export default App;
