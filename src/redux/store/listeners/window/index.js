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
  window.addEventListener("mousedown", event => {
    store.dispatch(action.mouseup(false));
    store.dispatch(action.mousedown(true));
  });
  window.addEventListener("mouseup", event => {
    store.dispatch(action.mousedown(false));
    store.dispatch(action.mouseup(true));
  });
};
