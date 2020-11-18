import React, { Component } from 'react';
import './App.css';

class App extends Component {
  textChangeHandler = () => {

  }
  
  render() {
    return (
      <div className="App">
        <h1>LET'S GO</h1>
        <form>
          <label className="App-input">Write some text</label>
          <input
            changed={this.textChangeHandler}
            type="text"/>
        </form>
      </div>
    );
  }
}

export default App;
