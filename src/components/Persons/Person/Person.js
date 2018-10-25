import React from "react";

const Person = props => {
  return (
    <div className="Person">
      <p onClick={props.clicked}>I'm a {props.name}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
