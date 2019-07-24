import React from 'react';

import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends React.Component {

  state = {
    inputValue: '',
    inputArray: []
  }

  inputChanged = (event) => {
    this.setState({
      inputValue: event.target.value,
      inputArray: event.target.value.split('')
    })
  }

  letterDeleted = (index) => {
    let charsArray = [...this.state.inputArray];
    charsArray.splice(index, 1);
    this.setState({
      inputArray: [...charsArray],
      inputValue: charsArray.join('')
    })
  }

  render() {
    let charList = this.state.inputArray.map((value, index) => {
      return (
        <Char
          click={() => this.letterDeleted(index)}
          letter={value}
          key={index}/>
      )
    })
    return (
      <div className="App">
        <input onChange={this.inputChanged} type="text" value={this.state.inputValue}></input>
        <p>Length: {this.state.inputValue.length}</p>
        <Validation length={this.state.inputValue.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
