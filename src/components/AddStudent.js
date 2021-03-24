import { datas } from "./store.js";
import React from "react";
import { Link } from "react-router-dom";

class AddStudent extends React.Component {
  state = { datas };
  componentDidMount() {
    this.state = {
      name: "your full name",
      age: "",
      gender: "",
      city: "",
    };
  }

  handleChange() {
    this.setState({ name: "your full name", age: "", gender: "", city: "" });
    console.log(this.state.name);
  }

  handleSubmit(event) {
    alert(" the user was added!!");
    event.preventDefault();
  }

  setName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  setImage = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  setName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  setName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  render() {
    const renderStudents = () => {
      console.log(this.props);

      return (
        <div className="card Add">
          <div className="red_circle"></div>
          <form onSubmit={this.handleSubmit}>
            <label>
              {" "}
              input name:
              <input
                value={this.state.name}
                onChange={this.setName}
                placeholder="your name"
              />
            </label>
            <br />

            <label for="img">Select image:</label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              value={this.setImage}
            />

            <label>
              {" "}
              age:
              <input
                type="number"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="your age"
              />
            </label>
            <br />

            <label>
              gender:
              <input
                value={this.state.gender}
                onChange={this.handleChange}
                placeholder="your gender"
              />
            </label>
            <br />

            <label>
              {" "}
              city:
              <input
                value={this.state.city}
                onChange={this.handleChange}
                placeholder="your city"
              />
            </label>
            <br />

            <input type="submit" value="submit"></input>
          </form>
        </div>
      );
    };
    return <div>{renderStudents()}</div>;
  }
}

export default AddStudent;
