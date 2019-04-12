import React from "react";
import Smurf from "./Smurf";
const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.id}
            smurfs={smurf}
            deleteSmurf={props.deleteSmurf}
            deletingSmurf={props.deletingSmurf}
          />
        );
      })}
    </div>
  );
};

export default SmurfList;
