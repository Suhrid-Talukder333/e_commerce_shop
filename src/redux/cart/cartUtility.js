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

export const removeItems = (cartItems, removeitem) => {
  const exists = cartItems.find((item) => {
    return item.id === removeitem.id;
  });
  if (exists.quantity === 1) {
    return cartItems.filter((item) => item.id !== removeitem.id);
  }
  return cartItems.map((item) =>
    item.id === removeitem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
