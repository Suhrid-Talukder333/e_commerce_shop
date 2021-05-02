export const modifyCartItems = (cartItems, additem) => {
  const exists = cartItems.find((item) => {
    return item.id === additem.id;
  });
  if (exists) {
    return cartItems.map((cartItem) =>
      cartItem.id === additem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...additem, quantity: 1 }];
};
