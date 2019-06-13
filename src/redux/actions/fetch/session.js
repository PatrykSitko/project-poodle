import { SESSION_ESTABLISHED } from "../types";
export default (token, url) => {
  return { type: SESSION_ESTABLISHED, payload: { token, url } };
};
