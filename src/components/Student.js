import React from "react";
import {datas} from './store.js';
import Card from "./Card";

class Student extends React.Component {
  state = { student: null };


  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const oneStudent = datas.map(student => {
      console.log( student.id);
    });

    this.setState({ student: oneStudent });
  }

  render() {
    return (
    //  <div>{this.state.student && <Card data={this.state.student} />}</div>
<div>
<Card data={this.state.student} />
  </div>
    );
  }
}
export default Student;