import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Grade from "./Grade";
import "./Grades.css";

function mapStateToProps({ data: { grades, percentage }, width, height }) {
  return { display: grades, percentage, width, height };
}

export class Grades extends Component {
  state = {
    offset: {
      height: 209,
      width: 462
    }
  };
  componentWillMount = () => {
    window.addEventListener("resize", setPopupStyle.bind(this));
  };
  render() {
    const { display: grades, percentage, width, height } = this.props;
    const { offset, popupStyle } = this.state;
    return (
      <div
        id="grades"
        style={{ width: width - offset.width, height: height - offset.height }}
      >
        <h1>Resultaten</h1>
        <div id="table-wrapper">
          <table>
            <tbody>
              {grades.map((grade, index) => (
                // @ts-ignore
                <Grade
                  key={index}
                  {...grade}
                  className={
                    index % 2 === 0 ? "table-row-even" : "table-row-odd"
                  }
                  popupStyle={popupStyle}
                />
              ))}
            </tbody>
          </table>
        </div>
        <h2>Percentage: {percentage}%</h2>
      </div>
    );
  }
  componentDidMount = () => {
    this._isMounted = true;
    setPopupStyle.bind(this)();
  };
  componentWillUnmount = () => {
    this._isMounted = false;
    window.removeEventListener("resize", setPopupStyle.bind(this));
  };
}
function setPopupStyle() {
  if (!this._isMounted) return;
  // @ts-ignore
  const boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
  const { width, height } = this.props;
  const { offset } = this.state;
  this.setState({
    popupStyle: {
      left: boundingRect.left,
      top: boundingRect.top,
      width: width - offset.width,
      height: height - offset.height
    }
  });
}
export default connect(mapStateToProps)(Grades);
