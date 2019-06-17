export const initialRouterState = {
  pathname: "/",
  search: "",
  queries: {},
  hash: ""
};

export default (router = initialRouterState, { type: action, payload }) => {
  if (action === "ROUTER/LOCATION_CHANGE") {
    return { ...router, ...payload };
  } else {
    return router;
  }
};
