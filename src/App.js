import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{
      name: 'Max', age: 28
    }, {
      name: 'Stephanie', age: 33
    }]
  };
  
  switchNameHandler = () => {    
      this.setState({persons: [{
              name: 'Kuba', age: 28
          }, {
              name: 'Stephanie', age: 33
          }]})
  };
  
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
          <button onClick={this.switchNameHandler}>Switch name</button>
          <Person name={this.state.persons[0].name}/>
          <Person name={this.state.persons[1].name}/>
      </div>      
    );
  }
}

export default App;