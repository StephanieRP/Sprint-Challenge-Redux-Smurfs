import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, addSmurf, deleteSmurf, editSmurf } from "../actions/index";
import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
class App extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="smurf-list-wrapper">
          <h1> Welcome to the Village</h1>
          <SmurfList
            smurfs={this.props.smurfs}
            deleteSmurf={this.props.deleteSmurf}
          />
        </div>
        <SmurfForm
          smurfs={this.props.smurfs}
          addSmurf={this.props.addSmurf}
          editSmurf={this.props.editSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs }) => ({
  smurfs
});

export default connect(
  mapStateToProps,
  { getData, addSmurf, deleteSmurf, editSmurf }
)(App);
