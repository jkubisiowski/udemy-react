import React from "react";
import classes from "./Cockpit.module.css"

const Cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi</h1>
      <p className={assignedClasses.join(" ")}>It's really working</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle check
      </button>
    </div>
  );
};

export default Cockpit;
