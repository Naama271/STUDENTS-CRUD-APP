import { datas } from "./store.js";
import React from "react";
import { Link } from "react-router-dom";
import AddStudent from "./AddStudent.js";

class Students extends React.Component {
  state = { datas };
  componentDidMount() {
    this.setState({ datas });
  }
  render() {
    const renderStudents = () => {
      console.log(this.props);
      return this.state.datas.map((student) => {
        return (
          <Link
            to={`${this.props.location.pathname}/${student.id}`}
            key={student.id}
          >
            <div className="card">
              <div className="red_circle"></div>
              <h2> {student.name}</h2>
              <img src={student.image}></img> <br />
              {student.age}
              <br />
              {student.gender}
            </div>
          </Link>
        );
      });
    };
    return (
      <>
        <div>{renderStudents()}</div>
        <AddStudent />;
      </>
    );
  }
}

export default Students;
