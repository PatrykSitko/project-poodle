import { setWidth, setHeight } from "./actions";

export function bindEventListeners(store) {
  window.addEventListener("resize", event => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (store.getState().width !== width) store.dispatch(setWidth(width));
    if (store.getState().height !== height) store.dispatch(setHeight(height));
  });
}
