import CartActionTypes from "./cartTypes";

const INITIAL_STATE = {
  hidden: true,
};

const toggleCart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default toggleCart;
