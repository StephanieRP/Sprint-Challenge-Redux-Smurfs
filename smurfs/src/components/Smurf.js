import React from "react";

const Smurf = props => {
  return (
    <div>
      <h3> {props.smurfs.name}</h3>
      <h4> {props.smurfs.age}</h4>
      <p>{props.smurfs.height}</p>
    </div>
  );
};

export default Smurf;
