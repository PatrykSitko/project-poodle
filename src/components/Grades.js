import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import Grade from "./Grade";
import "./Grades.css";

function mapStateToProps({ data: { grades, percentage } }) {
  return { display: grades, percentage };
}

export class Grades extends Component {
  state = {
    height: this.height,
    width: this.width
  };
  componentWillMount = () => {
    window.addEventListener("resize", event => {
      this.setState({
        height: this.height,
        width: this.width
      });
      setPopupStyle.bind(this)();
    });
  };
  get width() {
    return window.innerWidth - 462;
  }
  get height() {
    return window.innerHeight - 209;
  }
  render() {
    const { display: grades, percentage } = this.props;
    const { width, height, popupStyle } = this.state;
    return (
      <div id="grades" style={{ height, width }}>
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
  };
}

function setPopupStyle() {
  if (!this._isMounted) return;
  // @ts-ignore
  const boundingRect = ReactDOM.findDOMNode(this).getBoundingClientRect();
  this.setState({
    popupStyle: {
      left: boundingRect.left,
      top: boundingRect.top,
      width: this.state.width,
      height: this.state.height
    }
  });
}
export default connect(mapStateToProps)(Grades);
