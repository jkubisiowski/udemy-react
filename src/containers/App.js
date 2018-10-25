import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Max",
        age: 28
      },
      {
        id: 2,
        name: "Stephanie",
        age: 33
      },
      {
        id: 3,
        name: "Lolek",
        age: 21
      }
    ],
    showPersons: true
  };

  nameChangedHandler = (event, key) => {
    let personIndex = this.state.persons.findIndex(x => x.id === key);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  deletePersonHandler = index => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  render() {
    const style = {
      backgroundColor: "greenyellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons} changed={this.nameChangedHandler} clicked={this.deletePersonHandler}></Persons>
      style.backgroundColor = "red";      
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi</h1>
        <p>Css module test</p>
        <p className={classes.join(" ")}>It's really working</p>
        <button style={style} onClick={this.togglePersonHandler}>
          Toggle check
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
