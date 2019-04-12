import React, { Component } from "react";
import { connect } from "react-redux";
import { getData, addSmurf, deleteSmurf } from "../actions/index";
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
        <div>
          <SmurfList
            smurfs={this.props.smurfs}
            deleteSmurf={this.props.deleteSmurf}
            deletingSmurf={this.props.deletingSmurf}
          />
        </div>
        <SmurfForm smurfs={this.props.smurfs} addSmurf={this.props.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, deletingSmurf }) => ({
  smurfs,
  deletingSmurf
});

export default connect(
  mapStateToProps,
  { getData, addSmurf, deleteSmurf }
)(App);
