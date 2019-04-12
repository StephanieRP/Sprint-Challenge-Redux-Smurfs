import React from "react";

const Smurf = props => {
  console.log(props);
  return (
    <div className="smurf-card">
      <span onClick={() => props.deleteSmurf(props.smurfs.id)}> X </span>
      <h3 className="smurf-name">Name: {props.smurfs.name}</h3>
      <h4 className="smurf-age">Age: {props.smurfs.age}</h4>
      <p className="smurf-height">Height: {props.smurfs.height}</p>
    </div>
  );
};

export default Smurf;
