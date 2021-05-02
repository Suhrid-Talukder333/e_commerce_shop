import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectTotal } from "../../redux/cart/cartSelectors";
import CheckoutItems from "../../Components/CheckoutItems/CheckoutItems";
import "./styles.scss";

function Checkout({ cartItems, total }) {
  console.log(total);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((items) => (
        <CheckoutItems key={items.id} cartItems={items} />
      ))}
      <div className="total">$TOTAL:{total}</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

export default connect(mapStateToProps, null)(Checkout);
