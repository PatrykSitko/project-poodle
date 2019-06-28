export const initialGroupState = {};

export default (state = initialGroupState, { type: action, payload }) => {
  switch (action) {
    default:
      return state;
    case "UPDATED_GROUP_DATA":
      return { ...state, ...payload };
  }
};
