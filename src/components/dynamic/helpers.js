import ReactDOM from "react-dom";

export function calcHeight(ref, heightDividedBy) {
  if (ref.current) {
    const newHeight =
      ReactDOM.findDOMNode(ref.current).getBoundingClientRect().width / 9;
    heightDividedBy =
      heightDividedBy === 0 || typeof heightDividedBy !== "number"
        ? 1
        : heightDividedBy;
    if (heightDividedBy < 1) {
      return newHeight * -heightDividedBy;
    } else {
      return newHeight / heightDividedBy;
    }
  }
  return undefined;
}
