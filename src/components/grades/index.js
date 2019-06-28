import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Grade from "./grade";
import "./grades.css";

export class Grades extends Component {
  state = {};
  componentWillMount = () => {
    window.addEventListener("resize", setPopupStyle.bind(this));
  };
  render() {
    const { display: grades, percentage } = this.props;
    const { popupStyle } = this.state;
    return (
      <div id="grades">
        <h1>Resultaten</h1>
        <div id="table-wrapper">
          <table>
            <tbody>
              {grades &&
                grades.map((grade, index) => (
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
        <h2>Percentage: {Math.floor(percentage * 100)}%</h2>
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
  const boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
  this.setState({
    popupStyle: {
      left: boundingRect.left,
      top: boundingRect.top,
      width: boundingRect.width - 6,
      height: boundingRect.height
    }
  });
}

function mapStateToProps({
  student: { grades, percentage },
  windowInnerWidth,
  windowInnerHeight
}) {
  return {
    display: grades,
    percentage,
    windowInnerWidth: windowInnerWidth.value,
    windowInnerHeight: windowInnerHeight.value
  };
}

export default connect(mapStateToProps)(Grades);
