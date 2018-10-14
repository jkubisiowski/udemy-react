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
  
  switchNameHandler = (newName) => {    
      this.setState({persons: [{
              name: newName, age: 28
          }, {
              name: 'Stephanie', age: 33
          }]})
  };
  
  nameChangedHandler = event => {
      this.setState({persons: [{
              name: event.target.value, age: 28
          }, {
              name: 'Stephanie', age: 33
          }]})
  };
  
  render() {
      const style = {
          backgroundColor: 'white',
          font: 'inherit',
          border: '1px solid blue',
          padding: '8px',
          cursor: 'pointer'
      };
      
    return (
      <div className="App">
        <h1>Hi</h1>
          <button style={style} onClick={this.switchNameHandler.bind(this, 'My new name')}>Switch name</button>
          <Person  name={this.state.persons[0].name} click={()=>this.switchNameHandler('Lolek')}/>
          <Person name={this.state.persons[1].name} click={this.switchNameHandler.bind(this, '2')} changed={this.nameChangedHandler}/>
      </div>      
    );
  }
}

export default App;