export function group(group) {
  return { type: "UPDATED_GROUP_DATA", payload: group };
}

export default location => async (dispatch, getState) => {
  const response = await fetch(location, {
    type: "GET",
    headers: {
      "Content-Type": "aplication/json; UTF-8;"
    }
  });
  const status = await response.status;

  switch (status) {
    case 200:
      dispatch({ type: "FETCHING_GROUP_SUCCESSFUL" });
      dispatch(group(await response.json()));
      break;
    case 203:
      dispatch({ type: "FETCHING_GROUP_ACCESS_DENIED!" });
      break;
    case 404:
      dispatch({ type: "FETCHING_GROUP_ENDPOINT_NOT_FOUND" });
      break;
    case 500:
      dispatch({ type: "FETCH_GROUP_SERVER_ERROR..." });
      break;
  }
};
