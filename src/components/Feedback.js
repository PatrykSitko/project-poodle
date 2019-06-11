import React, { Component } from "react";
import "./Feedback.css";

export default class Feedback extends Component {
  state = { height: window.innerHeight - 475 };
  componentWillMount = () => {
    window.addEventListener("resize", event => {
      if (this.state.height !== window.innerHeight - 478) {
        this.setState({ height: window.innerHeight - 478 });
      }
    });
  };
  render() {
    return (
      <div id="feedback-container" style={this.state}>
        {this.props.children}
      </div>
    );
  }
}
