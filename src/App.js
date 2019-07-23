import React from 'react';

import './App.css';
import Validation from './Validation/Validation';

class App extends React.Component {

  state = {
    inputLength: 0
  }

  inputChanged = (event) => {
    this.setState({
      inputLength: event.target.value.length
    })
  }

  render() {
    return (
      <div className="App">
        <input onChange={this.inputChanged} type="text"></input>
        <p>Length of the input: {this.state.inputLength}</p>
        <Validation
          length={this.state.inputLength}/>
      </div>
    );
  }
}

export default App;
