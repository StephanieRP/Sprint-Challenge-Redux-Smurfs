import React, { Component } from "react";

export default class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  addNewSmurf = e => {
    e.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
    alert("Your New Smurf Has Successfully been added");
  };

  render() {
    return (
      <div className="form-wrapper">
        <form className="smurf-form" onSubmit={this.addNewSmurf}>
          <p> Add Smurf</p>

          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Smurf Name"
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Smurf Age"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Smurf Height"
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
