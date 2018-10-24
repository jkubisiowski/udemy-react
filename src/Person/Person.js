import React from "react";
import classes from "./Person.module.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm a {props.name}</p>
      <p className={classes.lolek}>test</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
