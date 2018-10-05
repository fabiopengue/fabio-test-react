import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './assets/css/main.min.css';


import Hero from './components/heroComponent/hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Hero />
      </div>
    );
  }
}

export default App;
