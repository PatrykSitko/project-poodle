import React, { Component } from "react";
import { connect } from "react-redux";
import Grade from "./Grade";
import "./Grades.css";

export class Grades extends Component {
  state = { height: window.innerHeight - 209 };
  componentWillMount = () => {
    window.onresize = event => {
      if (this.state.height !== window.innerHeight - 209) {
        this.setState({ height: window.innerHeight - 209 });
      }
    };
  };
  render() {
    const { display: grades, percentage } = this.props;
    return (
      <div id="grades" style={this.state}>
        <h1>Resultaten</h1>
        <div id="table-wrapper">
          <table>
            {grades.map((grade, index) => (
              // @ts-ignore
              <Grade
                {...grade}
                style={{
                  backgroundColor: index % 2 === 0 ? "white" : "lightgray"
                }}
              />
            ))}
          </table>
        </div>
        <h2>Percentage: {percentage}%</h2>
      </div>
    );
  }
}

export default connect(({ userData: { grades, percentage } }) => {
  return { grades, percentage };
})(Grades);
