import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((a, current) => {
    return a + current.quantity;
  }, 0)
);
