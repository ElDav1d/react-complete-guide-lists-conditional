import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js'

class App extends Component {
  state = {
    text : {
      inputString: ''
    }
  }

  textChangeHandler = (event) => {
    const textNew = {...this.state.text};
    textNew.inputString = event.target.value;
    this.setState({text:textNew})
  }

  render() {
    const textLength = this.state.text.inputString.length;
    return (
      <div className="App">
        <h1>LET'S GO</h1>
        <form>
          <label className="App-input">Write some text bellow</label>
          <input
            onChange={this.textChangeHandler}
            type="text"
            value={this.state.text.inputString}/>
        </form>
        <h3>
          Text's length is {textLength}
        </h3> 
        <ValidationComponent 
          textLength={textLength}/>
      </div>
    );
  }
}

export default App;
