import { FETCHED_GROUPS_DATA } from "../../types";

export function setGroups(groups) {
  return { type: FETCHED_GROUPS_DATA, payload: [...groups] };
}

export default () => async (dispatch, getState) => {
  const url = await getState().router.pathname;
  const token = await getState().session.token;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ token })
  });
  const data = await response.json();
  dispatch(setGroups(data));
};
