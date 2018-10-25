import React from "react";
import classes from "./Cockpit.module.css"

const Cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = [classes.btn];
    if(props.showPersons) {
        btnClass.push(classes.btnRed);
    } else {
        btnClass.push(classes.btnGreen);
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>It's really working</p>
      <button className={btnClass.join(" ")} onClick={props.clicked}>
        Toggle check
      </button>
    </div>
  );
};

export default Cockpit;
