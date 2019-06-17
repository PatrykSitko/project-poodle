import action from "../../../actions/all";

export default store => {
  window.addEventListener("resize", event => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (store.getState().windowInnerWidth.value !== width)
      store.dispatch(action.windowInnerWidth(width));
    if (store.getState().windowInnerHeight.value !== height)
      store.dispatch(action.windowInnerHeight(height));
  });
  window.addEventListener(
    "mousedown",
    ({
      isTrusted,
      button,
      buttons,
      ctrlKey,
      altKey,
      shiftKey,
      clientX,
      clientY,
      target,
      path
    }) => {
      store.dispatch(
        action.mousedown({
          isTrusted,
          button,
          buttons,
          ctrlKey,
          altKey,
          shiftKey,
          clientX,
          clientY,
          target,
          path
        })
      );
    }
  );
  window.addEventListener(
    "mouseup",
    ({
      isTrusted,
      button,
      buttons,
      ctrlKey,
      altKey,
      shiftKey,
      clientX,
      clientY,
      target,
      path
    }) => {
      store.dispatch(action.mousedown(undefined));
    }
  );
};
