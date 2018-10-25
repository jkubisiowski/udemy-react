import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App.js constructor");
    this.state = {
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
  }

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

  componentWillMount() {
    console.log('App.js component will mount');    
  }

  componentDidMount() {
    console.log('App.js component did mount');    
  }

  render() {
    console.log("App.js render");

    const style = {
      backgroundColor: "greenyellow",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          changed={this.nameChangedHandler}
          clicked={this.deletePersonHandler}
        />
      );
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
