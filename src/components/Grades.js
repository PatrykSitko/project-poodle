import React, { Component } from "react";
import { connect } from "react-redux";
import Grade from "./Grade";
import "./Grades.css";

function mapStateToProps({ userData: { grades, percentage } }) {
  return { display: grades, percentage };
}

export class Grades extends Component {
  state = { height: window.innerHeight - 209 };
  componentWillMount = () => {
    window.addEventListener("resize", event => {
      if (this.state.height !== window.innerHeight - 209) {
        this.setState({ height: window.innerHeight - 209 });
      }
    });
  };
  render() {
    const { display: grades, percentage } = this.props;
    return (
      <div id="grades" style={this.state}>
        <h1>Resultaten</h1>
        <div id="table-wrapper">
          <table>
            <tbody>
              {grades.map((grade, index) => (
                // @ts-ignore
                <Grade
                  key={index}
                  {...grade}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "lightgray"
                  }}
                />
              ))}
            </tbody>
          </table>
        </div>
        <h2>Percentage: {percentage}%</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Grades);
