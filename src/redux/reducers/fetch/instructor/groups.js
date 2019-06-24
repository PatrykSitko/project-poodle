import { FETCHED_GROUPS_DATA } from "../../../actions/types";

export const initialGroupsState = [];

export default (state = initialGroupsState, { type: action, payload }) => {
  switch (action) {
    default:
      return state;
    case FETCHED_GROUPS_DATA:
      return { ...state, ...payload };
  }
};
