import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    repetidor: '',
  };

  repetidor = (event) => {
    this.setState({
      repetidor: event.target.value,
    });
  };

  render() {
  return (
    <div>
      <h1>Un repetidor</h1>
      <input type="text" placeholder="Empieza a escribir algo" onChange={(event) => this.repetidor(event)} />
      <p className="repeater">{this.state.repetidor}</p>
    </div>
  );
}
}

export default App;
