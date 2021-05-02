import CartActionTypes from "./cartTypes";

export const setCartToggle = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemsToCart = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const clearItemsFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
