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
      image:" ",
    };
  }

  // handleChange() {
  //   this.setState({ name: "your full name", age: "", gender: "", city: "" });
  //   console.log(this.state.name);
  // }

  handleSubmit(event) {

    console.log(this.state.name);
    event.preventDefault();
   // alert(" the user was added!!");

  }

  setName = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  setImage = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  setAge = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.age);
  };

  setGender = (event) => {
    this.setState({ gender: event.target.value });
    console.log(this.state.gender);
  };

  
  setCity = (event) => {
    this.setState({ city: event.target.value });
    console.log(this.state.city);
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
                onChange={this.setAge}
                placeholder="your age"
              />
            </label>
            <br />

            <label>
              gender:
              <input
                value={this.state.gender}
                onChange={this.setGender}
                placeholder="your gender"
              />
            </label>
            <br />

            <label>
              {" "}
              city:
              <input
                value={this.state.city}
                onChange={this.setCity}
                placeholder="your city"
              />
            </label>
            <br />

            <input type="button" value="submit" onClick={this.handleSubmit}></input>
          </form>
        </div>
      );
    };
    return <div>{renderStudents()}</div>;
  }
}

export default AddStudent;
