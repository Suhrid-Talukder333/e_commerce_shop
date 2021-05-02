import React from "react";
import { connect } from "react-redux";
import {
  clearItemsFromCart,
  removeItemFromCart,
  addItemsToCart,
} from "../../redux/cart/cartActions";
import "./styles.scss";

function CheckoutItems({
  cartItems,
  clearItemsFromCart,
  removeItemFromCart,
  addItemsToCart,
}) {
  const { name, price, quantity, imageUrl } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItemsToCart(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemsFromCart(cartItems)}
      >
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItemsFromCart: (item) => dispatch(clearItemsFromCart(item)),
  addItemsToCart: (item) => dispatch(addItemsToCart(item)),
  removeItemFromCart: (item) => dispatch(removeItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItems);
