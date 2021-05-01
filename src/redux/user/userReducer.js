const INITIAL_STATE = {
  currentUser: "",
};

const userReducer = (previousState = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...previousState,
        currentUser: action.payload,
      };
    default:
      return previousState;
  }
};

export default userReducer;
