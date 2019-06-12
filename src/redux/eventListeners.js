import * as action from "./actions";

export function bindEventListeners(store) {
  window.addEventListener("resize", event => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (store.getState().width !== width)
      store.dispatch(action.setWidth(width));
    if (store.getState().height !== height)
      store.dispatch(action.setHeight(height));
  });
  window.addEventListener("mousedown", event => {
    store.dispatch(action.setMousedown(true));
  });
  window.addEventListener("mouseup", event => {
    store.dispatch(action.setMousedown(false));
  });
}
