import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((a, current) => {
    return a + current.quantity;
  }, 0)
);

export const selectTotal = createSelector([selectCartItems], (items) =>
  items.reduce((a, current) => {
    return a + current.price * current.quantity;
  }, 0)
);
