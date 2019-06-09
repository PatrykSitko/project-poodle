import React, { useState, useEffect } from "react";
import "./PopupButton.css";
// componentWillMount = () => {
//   window.onresize = event => {
//     if (this.state.height !== window.innerHeight - 209) {
//       this.setState({ height: window.innerHeight - 209 });
//     }
//   };
// };
export default function PopupButton({ content, children }) {
  const [clicked, setClicked] = useState(false);
  const [height, setHeight] = useState(window.innerHeight - 209);
  useEffect(() => {
    window.addEventListener("resize", event => {
      if (height !== window.innerHeight - 209) {
        setHeight(window.innerHeight - 209);
      }
    });
  }, [height]);
  return [
    clicked && (
      <div className="popup-window" key="popup-window" style={{ height }}>
        <div className="popup-content">{content}</div>
        <h2
          className="popup-close-button"
          onClick={event => setClicked(!clicked)}
        >
          Close
        </h2>
      </div>
    ),
    <button
      className="popup-button"
      key="popup-button"
      onClick={event => setClicked(!clicked)}
    >
      {children}
    </button>
  ];
}
