import React from "react";
import classes from "./Person.module.css";

const Person = props => {
  return (
    <div onClick={props.clicked} className={classes.Person}>
      <p>I'm a {props.name}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
