import CartActionTypes from "./cartTypes";
import { modifyCartItems } from "./cartUtility";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const toggleCart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: modifyCartItems(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default toggleCart;
