import { push } from "redux-first-routing";
import {
  ESTABLISHING_SESSION,
  SESSION_ESTABLISHED,
  FAILED_ESTABLISHING_SESSION
} from "../types";

export function updateSession(token) {
  return { type: SESSION_ESTABLISHED, payload: { token } };
}

export default ({ credentials, setSubmitting }) => async (
  dispatch,
  getState
) => {
  setSubmitting(true);
  dispatch({ type: ESTABLISHING_SESSION });
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      // "access-control-allow-origin": "*",
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(credentials)
  });
  setSubmitting(false);
  switch (response.status) {
    case 203:
      dispatch({ type: FAILED_ESTABLISHING_SESSION });
      alert(
        `${response.status}, Sorry dear ${credentials.userName} ${
          response.statusText
        }`
      );
      break;
    default:
      dispatch({ type: FAILED_ESTABLISHING_SESSION });
      alert("access denied!");
      break;
    case 200:
      const { token, url } = await response.json();
      dispatch(push(url));
      dispatch(updateSession(token));
      break;
    case 500:
      dispatch({ type: FAILED_ESTABLISHING_SESSION });
      alert("500: server error!");
      break;
  }
};
